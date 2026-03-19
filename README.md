# ManageUp

### 让大模型写出老板真正满意的报告

**[🇨🇳 中文](#manageup)** | **[🇺🇸 English](#english)**

> 大模型写的报告为什么不好？因为它没有你的数据，只能用空话填充。ManageUp 的核心思路：**先收集事实，再组织表达**。

ManageUp 是一个 AI Agent 技能仓库（Skill Warehouse），专门解决一个问题：**大模型写的职场报告太虚了**。

不只是工程师——产品经理、市场、销售、运营、HR，所有白领都要写报告给老板。但大模型写出来的报告充满了"积极推进"、"取得了一定进展"、"表现出色"这类空话。老板看完不知道你做了什么、做到了什么程度、需要他做什么。

ManageUp 通过一套反空话方法论 + 6 种报告模板，教 AI 写出**有数据、有结论、有行动项**的报告。

## 核心方法论：五大原则

| 原则 | 核心理念 | 空话示例 | ManageUp 示例 |
|------|---------|---------|-------------|
| **BLUF 结论先行** | 第一句话就是结论 | "本周团队在多方面开展工作..." | "项目提前 2 天，但支付模块有阻塞项需决策" |
| **数据锚定** | 每个判断挂钩具体数据 | "取得了一定进展" | "完成率从 60% 提升至 85%" |
| **So-What 测试** | 每段话回答"老板看完会怎样" | "与产品团队沟通" | "与产品对齐了 SSO 方案，结论是用 OAuth 2.0" |
| **行动导向** | 明确老板需要做什么 | "请领导关注" | "需要周五前决策是否增加 1 名后端" |
| **校准语言** | 消灭模糊词 | "尽快"、"部分用户" | "3/25 前"、"12% 的付费用户（约 3,400 人）" |

## 技能列表

| 技能 | 用途 | 适用场景 |
|------|------|---------|
| [`manage-up-core`](skills/manage-up-core/SKILL.md) | 核心方法论 | 所有报告的基础 |
| [`weekly-report`](skills/weekly-report/SKILL.md) | 周报 / 月报 | 最高频的报告类型 |
| [`project-update`](skills/project-update/SKILL.md) | 项目进展汇报 | 含红绿灯状态和风险矩阵 |
| [`performance-review`](skills/performance-review/SKILL.md) | 绩效自评 / 述职 | 高风险，直接影响评级和晋升 |
| [`proposal`](skills/proposal/SKILL.md) | 提案 / 资源申请 | 含 ROI 分析和不行动的代价 |
| [`meeting-summary`](skills/meeting-summary/SKILL.md) | 会议纪要 | 聚焦决策和行动项 |
| [`quarterly-review`](skills/quarterly-review/SKILL.md) | 季度复盘 / QBR | 含记分卡和根因分析 |

每个技能都包含：
- **SKILL.md** — 完整的技能指令（触发场景、输入模板、报告模板、反空话规则、质量检查清单）
- **examples.md** — 真实场景的输入/输出对比示例

## 安装

### Cursor（推荐）

将技能复制到 `~/.cursor/skills/` 目录（全局可用）：

```bash
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* ~/.cursor/skills/
```

或者只安装到当前项目：

```bash
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* .cursor/skills/
```

### Claude Code

```bash
mkdir -p ~/.claude/skills
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* ~/.claude/skills/
```

### OpenAI Codex CLI

```bash
mkdir -p ~/.codex/skills
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* ~/.codex/skills/
```

### 其他 AI 编辑器

ManageUp 技能基于 Agent Skills 开放标准（SKILL.md），理论上兼容所有支持该标准的工具。将 `skills/` 目录下的文件夹复制到对应工具的技能目录即可。

详细安装指南见 [docs/install.md](docs/install.md)。

## 使用方法

安装后，只需用自然语言告诉 AI 你要写什么报告：

```
帮我写周报，这周做了这些事：
- 完成了登录模块重构
- 修了 8 个 bug
- DAU 从 12000 涨到 14500
```

AI 会自动激活对应的 ManageUp 技能，先问你补充必要的数据，再生成结构化的报告。

如果你直接提供了足够的信息，AI 会直接生成报告而不再追问。

## 为什么大模型写的报告不好？

| 问题 | 原因 | ManageUp 的解法 |
|------|------|----------------|
| 空话太多 | AI 没有你的数据，只能用模糊词填充 | 强制先收集数据再写作 |
| 没有结构 | AI 不知道老板想看什么格式 | 每种报告有专业模板 |
| 不知道重点 | AI 把所有事情平铺直叙 | BLUF 原则：结论先行 |
| 缺少行动项 | AI 只描述不建议 | 每份报告必须有决策请求 |
| 语言虚浮 | AI 偏爱华丽辞藻 | 禁用词表 + 校准语言规则 |

## 适用人群

ManageUp 不只是给工程师用的。所有需要写报告给老板的人都可以用：

- 工程师 / 技术负责人
- 产品经理
- 市场 / 运营
- 销售
- 项目经理
- HR / 行政
- 任何需要向上汇报的白领

## 贡献

欢迎提交 Pull Request 贡献新的报告技能或改进现有技能。贡献指南：

1. 每个技能一个文件夹，包含 `SKILL.md` 和 `examples.md`
2. 遵循 `manage-up-core` 的五大原则
3. 必须包含反空话规则和质量检查清单
4. 示例必须包含"空话版 vs ManageUp 版"的对比

## License

MIT

---

<a name="english"></a>

## English

### Make AI write reports your boss actually wants to read

ManageUp is an AI Agent Skill Warehouse that solves one problem: **LLM-generated workplace reports are too vague and generic**.

Every white-collar professional — engineers, product managers, marketers, salespeople, operations — writes reports for their boss. But AI-generated reports are filled with fluff like "made good progress", "demonstrated strong leadership", and "will continue to drive growth". The boss finishes reading and doesn't know what you did, how well you did it, or what they need to do.

ManageUp provides an **anti-fluff methodology + 6 report templates** that teach AI to write reports with **real data, clear conclusions, and actionable items**.

### Skills

| Skill | Purpose |
|-------|---------|
| [`manage-up-core`](skills/manage-up-core/SKILL.md) | Core methodology (5 anti-fluff principles) |
| [`weekly-report`](skills/weekly-report/SKILL.md) | Weekly / Monthly status reports |
| [`project-update`](skills/project-update/SKILL.md) | Project progress with RAG status |
| [`performance-review`](skills/performance-review/SKILL.md) | Performance self-assessments |
| [`proposal`](skills/proposal/SKILL.md) | Proposals & resource requests with ROI |
| [`meeting-summary`](skills/meeting-summary/SKILL.md) | Meeting minutes focused on decisions & action items |
| [`quarterly-review`](skills/quarterly-review/SKILL.md) | Quarterly business reviews (QBR) |

### Quick Install (Cursor)

```bash
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* ~/.cursor/skills/
```

For other editors, see [docs/install.md](docs/install.md).
