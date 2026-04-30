#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

import { Client } from "@modelcontextprotocol/sdk/client/index.js";
import { StdioClientTransport } from "@modelcontextprotocol/sdk/client/stdio.js";
import {
  CallToolResultSchema,
  ListToolsResultSchema,
} from "@modelcontextprotocol/sdk/types.js";

const fallbackLogDir = path.join(process.cwd(), ".manage-up-mcp", "logs");
const preferredLogDir = process.env.MANAGE_UP_MCP_LOG_DIR || fallbackLogDir;
const defaultEntry = path.resolve("mcp-server.js");
const command = process.env.MANAGE_UP_MCP_COMMAND || process.execPath;
const args = process.env.MANAGE_UP_MCP_COMMAND
  ? []
  : [process.env.MANAGE_UP_MCP_ENTRY || defaultEntry];

async function main() {
  const transport = new StdioClientTransport({
    command,
    args,
    cwd: process.cwd(),
    stderr: "pipe",
    env: {
      ...process.env,
      MANAGE_UP_MCP_LOG_DIR: preferredLogDir,
    },
  });

  const stderrChunks = [];
  transport.stderr?.on("data", (chunk) => {
    stderrChunks.push(chunk.toString("utf8"));
  });

  const client = new Client({
    name: "manage-up-mcp-verifier",
    version: "1.0.0",
  });

  await client.connect(transport);

  const toolsResult = await client.request(
    {
      method: "tools/list",
      params: {},
    },
    ListToolsResultSchema
  );

  const weeklyResult = await client.request(
    {
      method: "tools/call",
      params: {
        name: "generate_weekly_report",
        arguments: {
          report_type: "weekly",
          completed_items:
            "完成了用户登录模块开发并通过 QA；处理了 15 个客户工单，平均响应时间 2 小时",
          metrics: "DAU 从 12000 提升到 15000；代码覆盖率从 65% 提升到 78%",
          blockers: "支付接口对接依赖第三方文档，预计影响上线 3 天",
          next_period_plan: "完成支付模块联调；修复 5 个 P2 bug；启动 v2.0 需求评审",
          decisions_needed: "需要在周五前确认是否增加 1 名后端支持支付联调",
          language: "zh",
        },
      },
    },
    CallToolResultSchema
  );

  const antiFluffResult = await client.request(
    {
      method: "tools/call",
      params: {
        name: "check_anti_fluff",
        arguments: {
          text: "本周积极推进了多个事项，整体进展顺利，后续会尽快继续跟进。",
          language: "zh",
        },
      },
    },
    CallToolResultSchema
  );

  await transport.close();

  console.log("Verification succeeded.");
  console.log("");
  console.log("Tools discovered:");
  for (const tool of toolsResult.tools) {
    console.log(`- ${tool.name}`);
  }

  console.log("");
  console.log("Sample weekly report preview:");
  console.log(extractText(weeklyResult).slice(0, 400));

  console.log("");
  console.log("Anti-fluff preview:");
  console.log(extractText(antiFluffResult).slice(0, 300));

  console.log("");
  console.log(`Telemetry log file: ${activeLogFile}`);
  if (fs.existsSync(activeLogFile)) {
    const lines = fs
      .readFileSync(activeLogFile, "utf8")
      .trim()
      .split("\n")
      .filter(Boolean);
    const recent = lines.slice(-5).map((line) => JSON.parse(line));
    console.log("Recent telemetry events:");
    for (const event of recent) {
      console.log(
        `- ${event.eventType} | tool=${event.toolName ?? "-"} | durationMs=${event.durationMs ?? "-"} | timestamp=${event.timestamp}`
      );
    }
  } else {
    console.log("Telemetry log file was not created.");
  }

  console.log("");
  console.log("Captured server stderr preview:");
  console.log(stderrChunks.join("").split("\n").filter(Boolean).slice(-8).join("\n"));
}

function resolveLogFile() {
  const filename = `${new Date().toISOString().slice(0, 10)}.jsonl`;
  const preferred = path.join(preferredLogDir, filename);
  const fallback = path.join(fallbackLogDir, filename);

  if (fs.existsSync(preferred)) {
    return preferred;
  }

  return fallback;
}

function extractText(result) {
  return result.content
    .filter((item) => item.type === "text")
    .map((item) => item.text)
    .join("\n");
}

main().catch((error) => {
  console.error("Verification failed:", error);
  process.exit(1);
});
  const activeLogFile = resolveLogFile();
