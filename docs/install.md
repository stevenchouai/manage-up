# ManageUp Skills 安装指南 (Legacy Skills Installation Guide)

> 如果你的 AI 客户端已经支持 MCP，请优先使用公开 npm 包：
>
> ```bash
> npm install -g manage-up-mcp
> ```
>
> 然后在客户端里注册命令：
>
> ```bash
> manage-up-mcp
> ```
>
> 本文档只保留给仍然使用 `skills/` 目录方式的场景。

## 前提条件

- Git（用于克隆仓库）
- 一个支持 Agent Skills 的 AI 编辑器（Cursor、Claude Code、Codex CLI 等）

## 安装方式

### 方式一：全局安装

全局安装后，ManageUp 技能在所有项目中都可用。

#### Cursor

```bash
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* ~/.cursor/skills/
```

Windows PowerShell:

```powershell
git clone https://github.com/stevenchouai/manage-up.git
Copy-Item -Recurse manage-up\skills\* $env:USERPROFILE\.cursor\skills\
```

#### Claude Code

```bash
git clone https://github.com/stevenchouai/manage-up.git
mkdir -p ~/.claude/skills
cp -r manage-up/skills/* ~/.claude/skills/
```

#### OpenAI Codex CLI

```bash
git clone https://github.com/stevenchouai/manage-up.git
mkdir -p ~/.codex/skills
cp -r manage-up/skills/* ~/.codex/skills/
```

#### CodeBuddy (Tencent)

```bash
git clone https://github.com/stevenchouai/manage-up.git
mkdir -p ~/.codebuddy/skills
cp -r manage-up/skills/* ~/.codebuddy/skills/
```

#### Kiro

```bash
git clone https://github.com/stevenchouai/manage-up.git
mkdir -p ~/.kiro/skills
cp -r manage-up/skills/* ~/.kiro/skills/
```

### 方式二：项目级安装

只在当前项目中使用 ManageUp。适合团队共享（技能文件会被提交到 Git）。

#### Cursor

```bash
mkdir -p .cursor/skills
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* .cursor/skills/
```

#### Claude Code

```bash
mkdir -p .claude/skills
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* .claude/skills/
```

#### Codex CLI

```bash
mkdir -p .agents/skills
git clone https://github.com/stevenchouai/manage-up.git
cp -r manage-up/skills/* .agents/skills/
```

### 方式三：Symlink 安装（方便更新）

使用软链接，`git pull` 即可更新所有技能：

```bash
git clone https://github.com/stevenchouai/manage-up.git ~/manage-up

# Cursor
ln -s ~/manage-up/skills/* ~/.cursor/skills/

# Claude Code
ln -s ~/manage-up/skills/* ~/.claude/skills/
```

Windows PowerShell (需要管理员权限):

```powershell
git clone https://github.com/stevenchouai/manage-up.git $env:USERPROFILE\manage-up

# 为每个技能文件夹创建软链接
$skills = Get-ChildItem "$env:USERPROFILE\manage-up\skills" -Directory
foreach ($skill in $skills) {
    New-Item -ItemType SymbolicLink `
        -Path "$env:USERPROFILE\.cursor\skills\$($skill.Name)" `
        -Target $skill.FullName
}
```

## 安装单个技能

如果你只需要某一个技能（例如只要周报）：

```bash
git clone https://github.com/stevenchouai/manage-up.git

# 只安装周报技能（建议同时安装 core）
cp -r manage-up/skills/manage-up-core ~/.cursor/skills/
cp -r manage-up/skills/weekly-report ~/.cursor/skills/
```

## 验证安装

安装后，在 AI 编辑器中输入以下内容测试：

```
帮我写一个周报
```

如果技能正确加载，AI 会：
1. 先问你提供本周的具体数据和成果
2. 按照 ManageUp 模板生成结构化报告
3. 报告以结论先行，包含数据和行动项

如果 AI 生成的报告仍然是空话风格（"本周积极推进了各项工作"），说明技能未正确加载，请检查文件是否在正确的目录下。

## 更新

```bash
cd manage-up
git pull
```

如果是复制安装（方式一/二），需要重新复制文件。如果是 symlink 安装（方式三），`git pull` 后自动生效。

## 卸载

删除对应目录下的技能文件夹即可：

```bash
# 全局卸载
rm -rf ~/.cursor/skills/manage-up-core
rm -rf ~/.cursor/skills/weekly-report
rm -rf ~/.cursor/skills/project-update
rm -rf ~/.cursor/skills/performance-review
rm -rf ~/.cursor/skills/proposal
rm -rf ~/.cursor/skills/meeting-summary
rm -rf ~/.cursor/skills/quarterly-review
```

## 常见问题

### 技能没有自动触发？

确保 SKILL.md 文件在正确的目录下。不同编辑器的技能目录不同：

| 编辑器 | 全局目录 | 项目目录 |
|--------|---------|---------|
| Cursor | `~/.cursor/skills/` | `.cursor/skills/` |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |
| Codex CLI | `~/.codex/skills/` | `.agents/skills/` |
| CodeBuddy | `~/.codebuddy/skills/` | `.codebuddy/skills/` |
| Kiro | `~/.kiro/skills/` | `.kiro/skills/` |

### 技能只支持中文/英文？

ManageUp 是双语的。AI 会自动检测你的输入语言并用相同语言输出。你也可以明确指定："请用英文写"或"请用中文写"。
