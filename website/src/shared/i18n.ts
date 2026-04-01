export type Language = 'zh' | 'en';

export const i18n = {
  zh: {
    // Navigation
    nav: {
      principles: '五大原则',
      forbiddenWords: '禁用词表',
      templates: '报告模板',
      audience: '受众分析',
      workflow: '工作流程',
      checklist: '质量检查',
      resources: '资源下载',
    },
    // Hero Section
    hero: {
      title: 'ManageUp',
      subtitle: '将 AI 空话转化为数据驱动的职场报告',
      description: '大模型写的报告为什么不好？因为它没有你的数据，只能用空话填充。ManageUp 帮助你用五大原则和禁用词表，让每份报告都结论先行、数据锚定、行动导向。',
      cta: '查看 GitHub 项目',
      secondaryCta: '查看资源',
      announcement: '开源方法论与模板持续更新中',
      stats: {
        principle: {
          value: '5 大原则',
          label: '把报告写作从空话拉回到结论、数据和行动',
        },
        templates: {
          value: '8 类模板 + 6 大厂风格',
          label: '覆盖周报、绩效、提案等场景，适配字节、阿里、腾讯、Google、Amazon、Microsoft',
        },
        bilingual: {
          value: '中英双语',
          label: '适合内部汇报、跨团队协作和国际化表达场景',
        },
      },
      proof: {
        repo: '项目仓库优先',
        repoDesc: '方法、模板和更新统一沉淀在 GitHub。',
        author: '作者公开背书',
        authorDesc: 'LinkedIn、GitHub、X 三个入口补足信任感。',
        action: '直接可执行',
        actionDesc: '不是概念站点，而是可落地的写作框架。',
      },
    },
    header: {
      projectCta: 'GitHub',
    },
    // Five Principles
    principles: {
      title: '五大原则',
      subtitle: '数据驱动、结论先行的职场报告核心方法论',
      bluf: {
        name: 'BLUF — 结论先行',
        description: '老板的时间比你贵。第一段就要回答"所以呢？"。',
        details: '报告的第一句话必须是结论、状态或核心请求。背景信息放在结论之后，不是之前。如果老板只读第一段就关掉，他应该已经知道最重要的事。',
      },
      dataAnchored: {
        name: '数据锚定',
        description: '每一个判断都必须挂钩到用户提供的具体数据。',
        details: '"进展顺利" → 必须替换为具体完成率、日期、数量。没有数据支撑的断言，宁可不写。',
      },
      soWhat: {
        name: 'So-What 测试',
        description: '写完每一段，问自己：老板看完会说"所以呢？"吗？',
        details: '每一段必须能回答"这对团队/项目/业务意味着什么？"。不是罗列做了什么，而是说明做了之后产生了什么影响。',
      },
      decisionReady: {
        name: '行动导向',
        description: '报告不是日记，是决策工具。',
        details: '需要老板做什么？截止时间是什么？不行动的后果是什么？如果报告不需要老板做任何事，在开头标注 [仅供知悉]。',
      },
      calibratedLanguage: {
        name: '校准语言',
        description: '消灭模糊词。用精确表达替代笼统描述。',
        details: '"尽快" → "3月25日前"；"部分用户" → "影响了12%的付费用户（约3,400人）"。',
      },
    },
    // Forbidden Words Table
    forbiddenWords: {
      title: '禁用词表',
      subtitle: '消灭空话，用精确表达替代笼统描述',
      table: {
        vague: '禁用（模糊）',
        precise: '替换为（精确）',
      },
      examples: [
        { vague: '取得了一定进展', precise: '完成率从 X% 提升至 Y%' },
        { vague: '进展顺利', precise: '按计划完成 N 项里程碑中的 M 项' },
        { vague: '显著提升', precise: '提升了 X%（从 A 到 B）' },
        { vague: '有所改善', precise: '指标从 X 变为 Y' },
        { vague: '大量工作', precise: '完成了 N 个任务/处理了 N 个工单' },
        { vague: '各方面表现良好', precise: '在 X、Y、Z 三个维度达标' },
        { vague: '尽快', precise: '3月25日前' },
        { vague: '部分用户', precise: '影响了 12% 的付费用户（约 3,400 人）' },
        { vague: '风险较高', precise: 'P1 风险：如不处理将导致上线延迟 5 天' },
        { vague: '资源紧张', precise: '差 1 名后端工程师，当前 3 人承担 4 人工作量' },
      ],
    },
    // Templates
    templates: {
      title: '报告模板库',
      subtitle: '六种职场报告类型，开箱即用',
      types: [
        { name: '周报/月报', description: '周期性状态汇报，结论先行、禁止空话' },
        { name: '项目进展', description: '项目状态、风险、里程碑，量化影响' },
        { name: '绩效自评', description: '成就、数据、反思，为晋升做准备' },
        { name: '提案/申请', description: '资源申请、决策项，行动导向' },
        { name: '会议纪要', description: '决策记录、行动项、责任人' },
        { name: '季度复盘', description: '成果总结、经验教训、下季度目标' },
      ],
    },
    // Audience Analysis
    audience: {
      title: '受众分析框架',
      subtitle: '不同受众需要不同的报告风格',
      types: [
        {
          name: '直属上级',
          focus: '细节、执行、风险',
          style: '详细、有数据支撑',
          example: '包含完整的背景、数据、风险分析',
        },
        {
          name: '隔级上级',
          focus: '大局、趋势、战略对齐',
          style: '精炼、聚焦结果和影响',
          example: '只展示关键指标和战略意义',
        },
        {
          name: '跨部门',
          focus: '协作点、依赖、时间线',
          style: '去掉专业术语、聚焦接口',
          example: '强调接口、依赖和时间线',
        },
        {
          name: '外部客户',
          focus: '价值、进展、信心',
          style: '专业、正面但诚实',
          example: '展示成果和价值，保持透明',
        },
      ],
    },
    // Workflow
    workflow: {
      title: '输入优先工作流',
      subtitle: '先收集事实，再组织表达',
      steps: [
        {
          number: 1,
          title: '确定受众',
          description: '你的报告要给谁看？直属上级、隔级上级、还是跨部门？',
        },
        {
          number: 2,
          title: '收集数据',
          description: '列出本周/月的所有成果、数据、风险。不要编造，没有的就留空。',
        },
        {
          number: 3,
          title: '提取结论',
          description: '从数据中提取最重要的结论。这是报告的第一句话。',
        },
        {
          number: 4,
          title: '组织表达',
          description: '按照模板组织内容。检查禁用词表，替换模糊词。',
        },
        {
          number: 5,
          title: '质量检查',
          description: '用质量检查清单验证。每一段都能回答"所以呢？"吗？',
        },
      ],
    },
    // Quality Checklist
    checklist: {
      title: '质量检查清单',
      subtitle: '每份报告生成后，逐项验证',
      items: [
        '第一段是否直接给出了结论/状态？（BLUF）',
        '每个判断是否都有具体数据支撑？（Data-Anchored）',
        '每一段是否能回答"老板看完会怎么想/做什么"？（So-What）',
        '是否明确了需要老板做的事？（Decision-Ready）',
        '是否有禁用词表中的模糊表达残留？（Calibrated Language）',
        '是否遗漏了用户提供的关键信息？',
        '语言是否与用户输入一致？',
        '报告长度是否适当？（不超过必要长度）',
      ],
    },
    // Resources
    resources: {
      title: '项目资源',
      subtitle: '查看 ManageUp 项目、模板来源和作者信息',
      skillmd: 'ManageUp 方法论源码',
      templates: '模板与提示词来源',
      download: '查看',
      hostedInRepo: '内容托管于项目仓库',
      openProject: '查看项目',
      openTemplates: '查看模板来源',
      sourceLabel: '源码',
      templatesLabel: '模板',
      includes: '包含内容：',
      templatesIncludes: '你将看到：',
      projectRepo: '项目仓库',
      projectRepoDesc: '查看完整源码、说明文档以及后续更新。',
      creatorLinkedIn: '作者 LinkedIn',
      creatorLinkedInDesc: '了解 Steven Chou 的职业背景和项目思路。',
      creatorGithub: '作者 GitHub',
      creatorGithubDesc: '查看更多作品与开源项目。',
      creatorX: '作者 X',
      creatorXDesc: '关注最新想法、更新和公开分享。',
      visitProject: '打开项目',
      viewProfile: '查看主页',
    },
    creator: {
      title: '由 Steven Chou 打造',
      description: 'ManageUp 是一个面向职场报告写作的实战方法论项目，项目仓库优先承载方法、模板与迭代更新，作者主页用于补充背景与信任背书。',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      x: 'X',
      note: '产品入口优先，作者主页用于补充背景与公开表达。',
    },
    // Footer
    footer: {
      about: '关于 ManageUp',
      description: '帮助职场人士写出数据驱动、结论先行的高质量报告。',
      sections: '内容导航',
      product: '产品',
      creator: '作者',
      github: 'ManageUp GitHub',
      contact: '联系我们',
    },
  },
  en: {
    // Navigation
    nav: {
      principles: 'Five Principles',
      forbiddenWords: 'Forbidden Words',
      templates: 'Templates',
      audience: 'Audience Analysis',
      workflow: 'Workflow',
      checklist: 'Quality Checklist',
      resources: 'Resources',
    },
    // Hero Section
    hero: {
      title: 'ManageUp',
      subtitle: 'Transform AI Fluff into Data-Driven Workplace Reports',
      description: 'Why are AI-generated reports so empty? Because they lack your data and resort to filler. ManageUp helps you apply five core principles and a forbidden words table to ensure every report leads with conclusions, anchors in data, and drives action.',
      cta: 'View GitHub Project',
      secondaryCta: 'View Resources',
      announcement: 'Open-source method and templates, updated continuously',
      stats: {
        principle: {
          value: '5 principles',
          label: 'Turn report writing away from fluff and back to conclusions, data, and action.',
        },
        templates: {
          value: '8 templates + 6 styles',
          label: 'Cover all report types, adapted for ByteDance, Alibaba, Tencent, Google, Amazon, Microsoft.',
        },
        bilingual: {
          value: 'Bilingual',
          label: 'Useful for internal updates, cross-functional work, and global teams.',
        },
      },
      proof: {
        repo: 'Repository-first',
        repoDesc: 'Method, templates, and updates all live in GitHub.',
        author: 'Public creator signals',
        authorDesc: 'LinkedIn, GitHub, and X add background and trust.',
        action: 'Directly usable',
        actionDesc: 'This is not a concept page. It is a practical writing framework.',
      },
    },
    header: {
      projectCta: 'GitHub',
    },
    // Five Principles
    principles: {
      title: 'Five Core Principles',
      subtitle: 'Data-driven, conclusion-first methodology for workplace reports',
      bluf: {
        name: 'BLUF — Bottom Line Up Front',
        description: 'Your boss\'s time is precious. Answer "So what?" in the first paragraph.',
        details: 'The first sentence must be the conclusion, status, or core request. Background comes after, not before. If your boss closes after the first paragraph, they should already know what matters most.',
      },
      dataAnchored: {
        name: 'Data-Anchored',
        description: 'Every claim must be tied to concrete data you provide.',
        details: '"Good progress" → must become specific completion rates, dates, numbers. Assertions without data support should not be written.',
      },
      soWhat: {
        name: 'So-What Test',
        description: 'After each paragraph, ask: Would your boss say "So what?"',
        details: 'Each paragraph must answer "What does this mean for the team/project/business?" Show impact, not just activities.',
      },
      decisionReady: {
        name: 'Decision-Ready',
        description: 'Reports are decision tools, not diaries.',
        details: 'What does your boss need to do? When? What happens if they don\'t? If no action is needed, mark it [FYI].',
      },
      calibratedLanguage: {
        name: 'Calibrated Language',
        description: 'Eliminate vague words. Use precise expressions instead.',
        details: '"ASAP" → "by March 25"; "some users" → "12% of paid users (~3,400 people)".',
      },
    },
    // Forbidden Words Table
    forbiddenWords: {
      title: 'Forbidden Words Table',
      subtitle: 'Eliminate fluff, replace vague language with precision',
      table: {
        vague: 'Forbidden (Vague)',
        precise: 'Replace With (Precise)',
      },
      examples: [
        { vague: 'made good progress', precise: 'completed N of M milestones' },
        { vague: 'significant improvement', precise: 'improved from X to Y (Z% increase)' },
        { vague: 'worked on various tasks', precise: 'delivered A, B, and C' },
        { vague: 'positive feedback', precise: 'NPS increased from X to Y' },
        { vague: 'soon', precise: 'by March 25' },
        { vague: 'some users', precise: '12% of paid users (~3,400)' },
        { vague: 'high risk', precise: 'P1: 5-day launch delay if unresolved' },
        { vague: 'resource constrained', precise: 'need 1 more backend engineer; 3 people covering 4-person workload' },
        { vague: 'ongoing optimization', precise: 'reduced latency from Xms to Yms (Z% improvement)' },
        { vague: 'productive discussions', precise: 'aligned on [decision], next step is [action] by [date]' },
      ],
    },
    // Templates
    templates: {
      title: 'Report Template Gallery',
      subtitle: 'Six workplace report types, ready to use',
      types: [
        { name: 'Weekly/Monthly Report', description: 'Periodic status updates, conclusion-first, no fluff' },
        { name: 'Project Update', description: 'Status, risks, milestones, quantified impact' },
        { name: 'Performance Review', description: 'Achievements, data, reflection, career readiness' },
        { name: 'Proposal/Request', description: 'Resource requests, decisions, action-oriented' },
        { name: 'Meeting Summary', description: 'Decisions, action items, owners' },
        { name: 'Quarterly Review', description: 'Results, lessons learned, next quarter goals' },
      ],
    },
    // Audience Analysis
    audience: {
      title: 'Audience Analysis Framework',
      subtitle: 'Different audiences need different report styles',
      types: [
        {
          name: 'Direct Manager',
          focus: 'Details, execution, risks',
          style: 'Detailed, data-backed',
          example: 'Include full context, data, risk analysis',
        },
        {
          name: 'Skip-Level Executive',
          focus: 'Big picture, trends, strategy alignment',
          style: 'Concise, results-focused',
          example: 'Show only key metrics and strategic value',
        },
        {
          name: 'Cross-Functional',
          focus: 'Collaboration points, dependencies, timeline',
          style: 'Remove jargon, focus on interfaces',
          example: 'Emphasize interfaces, dependencies, timeline',
        },
        {
          name: 'External Client',
          focus: 'Value, progress, confidence',
          style: 'Professional, positive but honest',
          example: 'Showcase results and value, maintain transparency',
        },
      ],
    },
    // Workflow
    workflow: {
      title: 'Input-First Workflow',
      subtitle: 'Collect facts first, then organize expression',
      steps: [
        {
          number: 1,
          title: 'Identify Audience',
          description: 'Who is this report for? Direct manager, skip-level, or cross-functional?',
        },
        {
          number: 2,
          title: 'Gather Data',
          description: 'List all achievements, metrics, risks from this period. Don\'t fabricate—leave blanks if needed.',
        },
        {
          number: 3,
          title: 'Extract Conclusion',
          description: 'What\'s the most important takeaway? This becomes your first sentence.',
        },
        {
          number: 4,
          title: 'Organize Content',
          description: 'Use the template structure. Check the forbidden words table and replace vague language.',
        },
        {
          number: 5,
          title: 'Quality Check',
          description: 'Validate against the checklist. Does each paragraph answer "So what?"',
        },
      ],
    },
    // Quality Checklist
    checklist: {
      title: 'Quality Checklist',
      subtitle: 'Verify each report against these standards',
      items: [
        'Does the first paragraph directly state the conclusion/status? (BLUF)',
        'Is every claim backed by specific data? (Data-Anchored)',
        'Does each paragraph answer "What should the boss think/do?" (So-What)',
        'Are action items clearly stated? (Decision-Ready)',
        'Are there any remaining vague words? (Calibrated Language)',
        'Did you include all key information provided?',
        'Is the language consistent with the input?',
        'Is the report length appropriate? (No unnecessary padding)',
      ],
    },
    // Resources
    resources: {
      title: 'Project Resources',
      subtitle: 'Explore the ManageUp project, template source, and creator profiles',
      skillmd: 'ManageUp Method Source',
      templates: 'Template and Prompt Source',
      download: 'View',
      hostedInRepo: 'Hosted in the project repository',
      openProject: 'Open Project',
      openTemplates: 'Open Template Source',
      sourceLabel: 'Source',
      templatesLabel: 'Templates',
      includes: 'Includes:',
      templatesIncludes: 'What you will find:',
      projectRepo: 'Project Repository',
      projectRepoDesc: 'Browse the full source code, documentation, and future updates.',
      creatorLinkedIn: 'Creator LinkedIn',
      creatorLinkedInDesc: 'See Steven Chou’s professional background and product thinking.',
      creatorGithub: 'Creator GitHub',
      creatorGithubDesc: 'Explore more projects and open-source work.',
      creatorX: 'Creator X',
      creatorXDesc: 'Follow public thoughts, updates, and ongoing notes.',
      visitProject: 'Open Project',
      viewProfile: 'View Profile',
    },
    creator: {
      title: 'Built by Steven Chou',
      description: 'ManageUp is a practical methodology project for workplace reporting. The repository is the main home for the method, templates, and ongoing iteration, while Steven’s profiles provide context and credibility.',
      linkedin: 'LinkedIn',
      github: 'GitHub',
      x: 'X',
      note: 'The product repo stays primary; creator profiles add context and public signal.',
    },
    // Footer
    footer: {
      about: 'About ManageUp',
      description: 'Help professionals write data-driven, conclusion-first, high-quality reports.',
      sections: 'Sections',
      product: 'Product',
      creator: 'Creator',
      github: 'ManageUp GitHub',
      contact: 'Contact Us',
    },
  },
};

export function getI18n(lang: Language) {
  return i18n[lang];
}
