#!/usr/bin/env node

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { randomUUID } from "node:crypto";

import { z } from "zod";
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const SERVER_NAME = "manage-up-mcp";
const SERVER_VERSION = "1.1.0";
const DEFAULT_LOG_DIR = path.join(os.homedir(), ".manage-up-mcp", "logs");
const FALLBACK_LOG_DIR = path.join(process.cwd(), ".manage-up-mcp", "logs");
const SESSION_ID = randomUUID();
const LOG_RAW_ARGS = process.env.MANAGE_UP_MCP_LOG_ARGS === "1";

const antiFluffRules = {
  "取得了一定进展": "完成率从 X% 提升至 Y%",
  "进展顺利": "按计划完成 N 项里程碑中的 M 项",
  "显著提升": "提升了 X%（从 A 到 B）",
  "有所改善": "指标从 X 变为 Y",
  "大量工作": "完成了 N 个任务/处理了 N 个工单",
  "各方面表现良好": "在 X、Y、Z 三个维度达标",
  "积极推进": "完成了哪项动作、产出了什么结果、影响了什么指标",
  "持续跟进": "本周完成了什么，下周还剩什么，预计何时完成",
  "深入讨论": "对齐了什么结论、谁负责下一步、截止时间是什么",
  "尽快": "在具体日期前",
  "部分用户": "影响了多少用户或占比多少",
  "风险较高": "P1/P2 风险 + 量化影响 + 触发条件",
  "资源紧张": "缺少多少人力/预算，当前缺口造成什么影响",
  "made good progress": "completed N of M milestones",
  "significant improvement": "improved from X to Y (Z% improvement)",
  "worked on various tasks": "delivered A, B, and C",
  "productive discussion": "aligned on X; next step is Y by DATE",
  "positive feedback": "received N positive responses / score moved from X to Y",
};

const weeklyReportSchema = z.object({
  report_type: z.enum(["weekly", "monthly"]).default("weekly"),
  completed_items: z.string().min(1, "completed_items 不能为空"),
  metrics: z.string().optional(),
  blockers: z.string().optional(),
  next_period_plan: z.string().min(1, "next_period_plan 不能为空"),
  decisions_needed: z.string().optional(),
  language: z.enum(["zh", "en"]).default("zh"),
});

const performanceReviewSchema = z.object({
  achievements: z.string().min(1, "achievements 不能为空"),
  metrics: z.string().min(1, "metrics 不能为空"),
  growth_areas: z.string().optional(),
  challenges: z.string().optional(),
  language: z.enum(["zh", "en"]).default("zh"),
});

const proposalSchema = z.object({
  proposal_title: z.string().min(1, "proposal_title 不能为空"),
  problem_statement: z.string().min(1, "problem_statement 不能为空"),
  proposed_solution: z.string().min(1, "proposed_solution 不能为空"),
  expected_benefits: z.string().optional(),
  resource_required: z.string().optional(),
  timeline: z.string().optional(),
  language: z.enum(["zh", "en"]).default("zh"),
});

const antiFluffSchema = z.object({
  text: z.string().min(1, "text 不能为空"),
  language: z.enum(["zh", "en"]).default("zh"),
});

const tools = [
  {
    name: "generate_weekly_report",
    description:
      "生成数据驱动的周报/月报，遵循 ManageUp 核心原则。结论先行、禁止空话、明确老板需要做什么。",
    inputSchema: {
      type: "object",
      properties: {
        report_type: {
          type: "string",
          enum: ["weekly", "monthly"],
          default: "weekly",
          description: "报告类型：weekly (周报) 或 monthly (月报)",
        },
        completed_items: {
          type: "string",
          description:
            "本周/月完成的具体事项和产出。可用分号、换行或列表分隔。",
        },
        metrics: {
          type: "string",
          description:
            "关键数据指标的变化。例：DAU 从 12000 涨到 15000；代码覆盖率从 65% 提升到 78%",
        },
        blockers: {
          type: "string",
          description:
            "遇到的风险、阻塞项及需要老板提供的帮助。例：支付接口对接延迟，等待第三方 API 文档，预计影响上线时间 3 天",
        },
        next_period_plan: {
          type: "string",
          description:
            "下周/月最重要的 2-3 件事及预计完成日期。可用分号、换行或列表分隔。",
        },
        decisions_needed: {
          type: "string",
          description:
            "需要老板做的决策、截止日期及不决策的后果。",
        },
        language: {
          type: "string",
          enum: ["zh", "en"],
          default: "zh",
          description: "输出语言：zh (中文) 或 en (英文)",
        },
      },
      required: ["completed_items", "next_period_plan"],
    },
  },
  {
    name: "generate_performance_review",
    description:
      "生成数据驱动的绩效自评，突出具体成就和量化指标，避免空话。",
    inputSchema: {
      type: "object",
      properties: {
        achievements: {
          type: "string",
          description: "本周期的主要成就。可用分号、换行或列表分隔。",
        },
        metrics: {
          type: "string",
          description: "量化指标。例：线上 bug 率下降 30%，团队效率提升 25%",
        },
        growth_areas: {
          type: "string",
          description: "成长领域。",
        },
        challenges: {
          type: "string",
          description: "遇到的挑战及解决方案。",
        },
        language: {
          type: "string",
          enum: ["zh", "en"],
          default: "zh",
          description: "输出语言",
        },
      },
      required: ["achievements", "metrics"],
    },
  },
  {
    name: "generate_proposal",
    description:
      "生成行动导向的提案/资源申请，清晰说明需求、预期收益和决策截止。",
    inputSchema: {
      type: "object",
      properties: {
        proposal_title: {
          type: "string",
          description: "提案标题。",
        },
        problem_statement: {
          type: "string",
          description: "问题陈述。",
        },
        proposed_solution: {
          type: "string",
          description: "建议方案。",
        },
        expected_benefits: {
          type: "string",
          description: "预期收益或 ROI。",
        },
        resource_required: {
          type: "string",
          description: "所需资源。",
        },
        timeline: {
          type: "string",
          description: "时间线和决策截止。",
        },
        language: {
          type: "string",
          enum: ["zh", "en"],
          default: "zh",
          description: "输出语言",
        },
      },
      required: ["proposal_title", "problem_statement", "proposed_solution"],
    },
  },
  {
    name: "check_anti_fluff",
    description:
      "检查文本中是否存在 ManageUp 禁用的模糊词汇，并给出改进建议。",
    inputSchema: {
      type: "object",
      properties: {
        text: {
          type: "string",
          description: "需要检查的文本内容",
        },
        language: {
          type: "string",
          enum: ["zh", "en"],
          default: "zh",
          description: "文本语言",
        },
      },
      required: ["text"],
    },
  },
];

const server = new Server(
  {
    name: SERVER_NAME,
    version: SERVER_VERSION,
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: rawArgs } = request.params;
  const startedAt = Date.now();

  emitTelemetry("tool_call_start", {
    toolName: name,
    argsSummary: summarizeArgs(rawArgs),
    rawArgs: LOG_RAW_ARGS ? rawArgs ?? null : undefined,
  });

  try {
    let result;

    switch (name) {
      case "generate_weekly_report":
        result = handleWeeklyReport(rawArgs ?? {});
        break;
      case "generate_performance_review":
        result = handlePerformanceReview(rawArgs ?? {});
        break;
      case "generate_proposal":
        result = handleProposal(rawArgs ?? {});
        break;
      case "check_anti_fluff":
        result = handleAntiFluffCheck(rawArgs ?? {});
        break;
      default:
        result = toolError(`Tool not found: ${name}`);
    }

    emitTelemetry(result.isError ? "tool_call_error" : "tool_call_success", {
      toolName: name,
      durationMs: Date.now() - startedAt,
    });

    return result;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);

    emitTelemetry("tool_call_error", {
      toolName: name,
      durationMs: Date.now() - startedAt,
      error: message,
    });

    return toolError(message);
  }
});

function handleWeeklyReport(rawArgs) {
  const parsed = weeklyReportSchema.safeParse(rawArgs);
  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const {
    report_type: reportType,
    completed_items: completedItems,
    metrics,
    blockers,
    next_period_plan: nextPeriodPlan,
    decisions_needed: decisionsNeeded,
    language,
  } = parsed.data;

  const completedList = parseItems(completedItems);
  const metricsList = parseItems(metrics);
  const blockerList = parseItems(blockers);
  const planList = parseItems(nextPeriodPlan);
  const decisionList = parseItems(decisionsNeeded);

  const isMonthly = reportType === "monthly";
  const nextPeriodLabel = language === "en" ? (isMonthly ? "Next Month" : "Next Week") : (isMonthly ? "下月" : "下周");
  const header = language === "en" ? `${isMonthly ? "Monthly" : "Weekly"} Report` : `${isMonthly ? "月报" : "周报"}`;
  const summary = buildWeeklySummary({
    language,
    completedList,
    blockerList,
    decisionList,
  });

  const body =
    language === "en"
      ? [
          `# ${header}`,
          "",
          "## Bottom Line",
          summary,
          "",
          "## Key Metrics",
          formatSectionList(metricsList, "No metrics provided."),
          "",
          "## Completed",
          formatSectionList(completedList, "No completed items provided."),
          "",
          "## Risks & Blockers",
          formatSectionList(
            blockerList,
            "No major blockers reported. FYI only."
          ),
          "",
          `## ${nextPeriodLabel}`,
          formatSectionList(planList, "No plan provided."),
          "",
          "## Decisions Needed",
          formatSectionList(decisionList, "No decisions needed at this time."),
          "",
          "---",
          "*Generated by ManageUp MCP*",
        ].join("\n")
      : [
          `# ${header}`,
          "",
          "## 核心结论",
          summary,
          "",
          "## 关键指标",
          formatSectionList(metricsList, "未提供指标数据。"),
          "",
          "## 本周期完成",
          formatSectionList(completedList, "未提供完成项。"),
          "",
          "## 风险与阻塞",
          formatSectionList(blockerList, "当前无明显阻塞，本报告仅供知悉。"),
          "",
          `## ${nextPeriodLabel}计划`,
          formatSectionList(planList, "未提供计划。"),
          "",
          "## 需要决策",
          formatSectionList(decisionList, "当前无需老板决策。"),
          "",
          "---",
          "*由 ManageUp MCP 生成*",
        ].join("\n");

  return textResult(body);
}

function handlePerformanceReview(rawArgs) {
  const parsed = performanceReviewSchema.safeParse(rawArgs);
  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const { achievements, metrics, growth_areas: growthAreas, challenges, language } = parsed.data;

  const achievementList = parseItems(achievements);
  const metricsList = parseItems(metrics);
  const growthList = parseItems(growthAreas);
  const challengeList = parseItems(challenges);

  const summary =
    language === "en"
      ? `The strongest evidence of impact this period is ${pickFirst(metricsList, "the quantified outcomes delivered against plan")}.`
      : `本周期最能证明价值的证据是：${pickFirst(metricsList, "已交付的量化结果")}。`;

  const body =
    language === "en"
      ? [
          "# Performance Review",
          "",
          "## Executive Summary",
          summary,
          "",
          "## Key Achievements",
          formatSectionList(achievementList, "No achievements provided."),
          "",
          "## Quantified Metrics",
          formatSectionList(metricsList, "No metrics provided."),
          "",
          "## Growth Areas",
          formatSectionList(
            growthList,
            "No additional growth notes provided."
          ),
          "",
          "## Challenges & Solutions",
          formatSectionList(
            challengeList,
            "No major challenges documented."
          ),
          "",
          "---",
          "*Generated by ManageUp MCP*",
        ].join("\n")
      : [
          "# 绩效自评",
          "",
          "## 核心总结",
          summary,
          "",
          "## 主要成就",
          formatSectionList(achievementList, "未提供主要成就。"),
          "",
          "## 量化指标",
          formatSectionList(metricsList, "未提供量化指标。"),
          "",
          "## 成长与提升",
          formatSectionList(growthList, "未补充成长信息。"),
          "",
          "## 挑战与解决方案",
          formatSectionList(challengeList, "未补充挑战信息。"),
          "",
          "---",
          "*由 ManageUp MCP 生成*",
        ].join("\n");

  return textResult(body);
}

function handleProposal(rawArgs) {
  const parsed = proposalSchema.safeParse(rawArgs);
  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const {
    proposal_title: proposalTitle,
    problem_statement: problemStatement,
    proposed_solution: proposedSolution,
    expected_benefits: expectedBenefits,
    resource_required: resourceRequired,
    timeline,
    language,
  } = parsed.data;

  const benefitsList = parseItems(expectedBenefits);
  const resourceList = parseItems(resourceRequired);
  const timelineList = parseItems(timeline);

  const summary =
    language === "en"
      ? `Recommendation: approve "${proposalTitle}" to address ${firstSentence(problemStatement)}`
      : `建议批准“${proposalTitle}”，用于解决：${firstSentence(problemStatement)}`;

  const body =
    language === "en"
      ? [
          `# Proposal: ${proposalTitle}`,
          "",
          "## Executive Summary",
          summary,
          "",
          "## Problem Statement",
          problemStatement,
          "",
          "## Proposed Solution",
          proposedSolution,
          "",
          "## Expected Benefits / ROI",
          formatSectionList(
            benefitsList,
            "Benefits not provided yet. Add time/cost/quality impact for approval readiness."
          ),
          "",
          "## Resources Required",
          formatSectionList(resourceList, "Resources still to be confirmed."),
          "",
          "## Timeline & Decision Deadline",
          formatSectionList(timelineList, "Decision timing not provided."),
          "",
          "---",
          "*Generated by ManageUp MCP*",
        ].join("\n")
      : [
          `# 提案：${proposalTitle}`,
          "",
          "## 执行摘要",
          summary,
          "",
          "## 问题陈述",
          problemStatement,
          "",
          "## 建议方案",
          proposedSolution,
          "",
          "## 预期收益 / ROI",
          formatSectionList(
            benefitsList,
            "暂未提供收益数据，建议补充时间、成本或质量收益。"
          ),
          "",
          "## 所需资源",
          formatSectionList(resourceList, "资源需求待补充。"),
          "",
          "## 时间线与决策截止",
          formatSectionList(timelineList, "暂未提供时间线。"),
          "",
          "---",
          "*由 ManageUp MCP 生成*",
        ].join("\n");

  return textResult(body);
}

function handleAntiFluffCheck(rawArgs) {
  const parsed = antiFluffSchema.safeParse(rawArgs);
  if (!parsed.success) {
    return validationError(parsed.error);
  }

  const { text, language } = parsed.data;
  const suggestions = [];

  for (const [fluff, replacement] of Object.entries(antiFluffRules)) {
    if (text.includes(fluff)) {
      suggestions.push(
        language === "en"
          ? `"${fluff}" -> replace with "${replacement}"`
          : `"${fluff}" -> 建议改为 "${replacement}"`
      );
    }
  }

  const body =
    language === "en"
      ? [
          "# Anti-Fluff Check",
          "",
          `## Issues Found: ${suggestions.length}`,
          "",
          suggestions.length > 0
            ? suggestions.map((item) => `- ${item}`).join("\n")
            : "No vague phrases detected.",
          "",
          "## Recommendation",
          suggestions.length > 0
            ? "Rewrite each vague statement with a concrete deliverable, metric, owner, or deadline."
            : "The wording is already fairly concrete. Keep checking for missing metrics or decisions.",
          "",
          "---",
          "*Generated by ManageUp MCP*",
        ].join("\n")
      : [
          "# 反空话检查报告",
          "",
          `## 发现问题数：${suggestions.length}`,
          "",
          suggestions.length > 0
            ? suggestions.map((item) => `- ${item}`).join("\n")
            : "未发现明显模糊表达。",
          "",
          "## 修改建议",
          suggestions.length > 0
            ? "把模糊表达改成具体交付物、数据、责任人或截止时间。"
            : "措辞已经比较具体，下一步重点检查是否还缺数字或决策信息。",
          "",
          "---",
          "*由 ManageUp MCP 生成*",
        ].join("\n");

  return textResult(body);
}

function parseItems(value) {
  if (!value) {
    return [];
  }

  return value
    .split(/\n|;|；/)
    .map((item) => item.replace(/^[-*•\d.\s]+/, "").trim())
    .filter(Boolean);
}

function formatSectionList(items, emptyText) {
  if (items.length === 0) {
    return emptyText;
  }

  return items.map((item) => `- ${item}`).join("\n");
}

function buildWeeklySummary({ language, completedList, blockerList, decisionList }) {
  if (language === "en") {
    if (decisionList.length > 0) {
      return `Key update: ${pickFirst(completedList, "major work was delivered")}; decision needed by the manager: ${stripDecisionLead(decisionList[0], "en")}.`;
    }

    if (blockerList.length > 0) {
      return `Key update: ${pickFirst(completedList, "major work was delivered")}, but the main current risk is ${blockerList[0]}.`;
    }

    return `FYI: ${pickFirst(completedList, "the planned work was delivered")} and no major blocker or decision is currently open.`;
  }

  if (decisionList.length > 0) {
    return `核心更新：${pickFirst(completedList, "本周期关键工作已完成")}；需要老板决策：${stripDecisionLead(decisionList[0], "zh")}。`;
  }

  if (blockerList.length > 0) {
    return `核心更新：${pickFirst(completedList, "本周期关键工作已完成")}；当前最大风险是 ${blockerList[0]}。`;
  }

  return `仅供知悉：${pickFirst(completedList, "本周期关键工作已按计划推进")}，当前没有需要升级的阻塞或决策事项。`;
}

function stripDecisionLead(text, language) {
  if (language === "en") {
    return text
      .replace(/^decision needed[:\s-]*/i, "")
      .replace(/^need(ed)? manager to /i, "")
      .trim();
  }

  return text
    .replace(/^需要(老板|经理|主管)?(在.+?前)?(确认|决定|拍板|审批)是否/, (match) =>
      match.includes("是否") ? "是否" : ""
    )
    .replace(/^需要(老板|经理|主管)?决策[:：]?\s*/, "")
    .trim();
}

function pickFirst(items, fallback) {
  return items.length > 0 ? items[0] : fallback;
}

function firstSentence(text) {
  return text.split(/[\n。.!?]/).map((part) => part.trim()).find(Boolean) ?? text;
}

function textResult(text) {
  return {
    content: [
      {
        type: "text",
        text,
      },
    ],
  };
}

function toolError(message) {
  return {
    content: [
      {
        type: "text",
        text: `Error: ${message}`,
      },
    ],
    isError: true,
  };
}

function validationError(error) {
  return toolError(
    error.issues
      .map((issue) => `${issue.path.join(".") || "input"}: ${issue.message}`)
      .join("; ")
  );
}

function summarizeArgs(args) {
  if (!args || typeof args !== "object") {
    return {
      keys: [],
      fieldCount: 0,
    };
  }

  const entries = Object.entries(args);

  return {
    keys: entries.map(([key]) => key),
    fieldCount: entries.length,
    valueLengths: Object.fromEntries(
      entries.map(([key, value]) => [key, String(value ?? "").length])
    ),
  };
}

function emitTelemetry(eventType, payload = {}) {
  const logDir = resolveLogDir();
  const record = {
    timestamp: new Date().toISOString(),
    eventType,
    sessionId: SESSION_ID,
    serverName: SERVER_NAME,
    serverVersion: SERVER_VERSION,
    pid: process.pid,
    ...payload,
  };

  const line = JSON.stringify(record);
  console.error(`[TELEMETRY] ${line}`);

  try {
    fs.mkdirSync(logDir, { recursive: true });
    const file = path.join(logDir, `${new Date().toISOString().slice(0, 10)}.jsonl`);
    fs.appendFileSync(file, `${line}\n`, "utf8");
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(`[TELEMETRY_WRITE_ERROR] ${message}`);
  }
}

export async function startServer() {
  const logDir = resolveLogDir();
  emitTelemetry("server_start", {
    logDir,
  });

  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(
    `ManageUp MCP Server is running on stdio transport (session ${SESSION_ID})`
  );
}

function resolveLogDir() {
  const requestedDir = process.env.MANAGE_UP_MCP_LOG_DIR || DEFAULT_LOG_DIR;

  if (canWriteDirectory(requestedDir)) {
    return requestedDir;
  }

  return FALLBACK_LOG_DIR;
}

function canWriteDirectory(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
    fs.accessSync(dirPath, fs.constants.W_OK);
    return true;
  } catch {
    return false;
  }
}

const isMainModule =
  process.argv[1] &&
  path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (isMainModule) {
  startServer().catch((error) => {
    const message = error instanceof Error ? error.message : String(error);
    emitTelemetry("server_fatal", { error: message });
    console.error("Fatal error:", error);
    process.exit(1);
  });
}
