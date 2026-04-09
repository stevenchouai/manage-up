# ManageUp MCP Server 本地安装与使用指南

本指南将帮助您在本地安装并配置 `ManageUp MCP Server`，使其能够被支持 MCP 协议的 AI 客户端（如 Claude Desktop, Cursor 等）调用，从而利用 `ManageUp` 的核心方法论生成高质量的职场报告。

## 1. 前提条件

在开始之前，请确保您的系统满足以下条件：

*   **Node.js**: 版本 18 或更高。您可以通过在终端运行 `node -v` 来检查。
*   **AI 客户端**: 支持 MCP 协议的 AI 应用程序，例如 [Claude Desktop](https://www.anthropic.com/claude-desktop) 或 [Cursor](https://cursor.sh/)。

## 2. 安装步骤

推荐优先使用公开 npm 包安装。

### 步骤 2.1: 全局安装 npm 包

```bash
npm install -g manage-up-mcp
```

安装完成后，本机可直接使用：

```bash
manage-up-mcp
```

### 步骤 2.2: 本地验收（推荐）

在接入 AI 客户端前，建议先做一遍最小验收：

```bash
mkdir -p /tmp/manage-up-mcp-live
cd /tmp/manage-up-mcp-live
npm install manage-up-mcp
```

如果您也保留了源码仓库，可以直接运行仓库内的验证脚本：

```bash
cd manage-up
npm install
npm run verify:mcp
```

这会做四件事：

1. 启动本地 MCP Server
2. 用真实 MCP Client 发现工具列表
3. 调用示例工具验证返回结果
4. 输出 telemetry 日志位置，确认调用数据是否成功落盘

### 步骤 2.3: 启动 MCP Server

`ManageUp MCP Server` 是一个基于 Stdio 传输的 Server。这意味着 AI 客户端会直接启动并管理 Server 进程。您无需手动运行一个长时间运行的进程。但是，为了验证 Server 是否能正常启动，您可以尝试运行：

```bash
manage-up-mcp
```

您应该会看到类似 `ManageUp MCP Server is running on stdio transport` 的输出，并在几秒后进程退出（因为没有 AI 客户端连接）。这表明 Server 已准备就绪。

## 3. 兼容旧方式：仓库本地运行 / 打包分发

如果您需要本地开发、二次修改或在内网分发 `.tgz` 包，可以继续使用源码仓库。

### 3.1 当前仓库本地运行

在仓库目录中：

```bash
npm install
npm link
```

完成后，系统中会出现一个可执行命令：

```bash
manage-up-mcp
```

这适合在您自己的电脑上长期使用。

### 3.2 打包后给其他人安装

先在本地打包：

```bash
npm run pack:mcp
```

会生成类似：

```bash
manage-up-mcp-1.1.0.tgz
```

其他人可以直接安装这个包：

```bash
npm install -g ./manage-up-mcp-1.1.0.tgz
```

这意味着：即使还没有发布到公共 npm，别人也可以通过 `.tgz` 文件安装。

## 4. 配置 AI 客户端

现在，您需要配置您的 AI 客户端来使用 `ManageUp MCP Server`。具体的配置方式可能因客户端而异，但核心思想是告诉客户端如何启动 `manage-up-mcp` 命令。

### 4.1 针对 Claude Desktop / Cursor (推荐)

大多数支持 MCP 的 AI 客户端都提供了一个简单的配置界面来添加本地 MCP Server。您通常只需要提供 Server 的启动命令。

1.  **打开您的 AI 客户端** (例如 Claude Desktop 或 Cursor)。
2.  **导航到 MCP Server 配置界面**：这通常在“设置 (Settings)”、“扩展 (Extensions)”或“工具 (Tools)”部分。
3.  **添加新的本地 Server**：
    *   **名称 (Name)**: `ManageUp MCP` (或您喜欢的任何名称)
    *   **命令 (Command)**: `manage-up-mcp`
        *   只有在您本机没有全局安装 npm 包时，才需要退回到仓库路径方式：`node /path/to/your/manage-up/mcp-server.js`

4.  **保存配置**。

配置完成后，您的 AI 客户端应该能够发现 `ManageUp MCP Server` 提供的工具，例如 `generate_weekly_report`、`generate_performance_review`、`generate_proposal` 和 `check_anti_fluff`。

### 4.2 使用 `manus-mcp-cli` (通用方式)

如果您的 AI 客户端支持通过 `manus-mcp-cli` 工具进行配置，您可以在终端中执行以下命令：

```bash
manus-mcp-cli add --name "manage-up-mcp" --command "manage-up-mcp"
```

如果您没有全局安装 npm 包，才退回到源码路径方式：

```bash
manus-mcp-cli add --name "manage-up-mcp" --command "node /path/to/your/manage-up/mcp-server.js"
```

## 5. 如何使用

一旦配置成功，您就可以在 AI 客户端中通过自然语言调用 `ManageUp MCP Server` 提供的工具了。例如：

*   **生成周报**: “帮我写一份周报，本周完成了用户登录模块开发，DAU 从 12000 涨到 15000，下周计划完成支付模块联调。”
*   **生成绩效自评**: “写一份绩效自评，我主导完成了 X 项目，代码审查通过率 98%。”
*   **检查空话**: “帮我检查一下这段话有没有空话：'本周团队积极推进各项工作，进展顺利。'”

AI 客户端会识别您的意图，并调用相应的 `ManageUp MCP` 工具来生成报告。

## 6. 监控与故障排查

`ManageUp MCP Server` 默认会记录本地 telemetry，用于监控工具是否被调用、是否成功、耗时多少。

### 默认采集内容

- `server_start`
- `tool_call_start`
- `tool_call_success`
- `tool_call_error`
- 工具名、时间戳、耗时、参数字段名和字段长度

默认**不会记录原始输入全文**，以减少敏感信息落盘风险。

### telemetry 日志位置

优先写入：

```bash
~/.manage-up-mcp/logs/YYYY-MM-DD.jsonl
```

如果当前环境无法写入用户目录，则自动降级到当前工作目录下：

```bash
.manage-up-mcp/logs/YYYY-MM-DD.jsonl
```

### 如需记录原始参数（谨慎）

```bash
MANAGE_UP_MCP_LOG_ARGS=1 manage-up-mcp
```

### 常见问题

*   **Server 未启动**: 检查 Node.js 是否安装正确，`npm install` 是否成功，以及 `mcp-server.js` 的路径是否正确。
*   **AI 客户端未发现工具**: 确保 MCP Server 已正确注册，并且 AI 客户端已重启或刷新。
*   **工具调用失败**: 检查 AI 客户端的日志输出，通常会显示 MCP Server 返回的错误信息。
*   **telemetry 没有落盘**: 先运行 `npm run verify:mcp`，查看输出中的 telemetry 路径；如果用户目录无权限，可手动设置 `MANAGE_UP_MCP_LOG_DIR`。

祝您使用愉快！
