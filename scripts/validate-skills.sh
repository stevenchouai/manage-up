#!/usr/bin/env bash

set -euo pipefail

repo_root="$(cd "$(dirname "$0")/.." && pwd)"
skills_dir="$repo_root/skills"

fail() {
  echo "ERROR: $*" >&2
  exit 1
}

[[ -d "$skills_dir" ]] || fail "missing skills directory"

default_required_sections=(
  "## 触发场景"
  "## 必填输入"
  "## 报告模板"
  "## 反空话规则"
  "## 质量检查"
)

core_required_sections=(
  "## 五大原则"
  "## 输入优先工作流"
  "## 质量检查清单"
)

skill_count=0

for skill_dir in "$skills_dir"/*; do
  [[ -d "$skill_dir" ]] || continue
  skill_count=$((skill_count + 1))

  skill_md="$skill_dir/SKILL.md"
  examples_md="$skill_dir/examples.md"

  [[ -f "$skill_md" ]] || fail "$(basename "$skill_dir"): missing SKILL.md"
  [[ -f "$examples_md" ]] || fail "$(basename "$skill_dir"): missing examples.md"

  grep -q '^---$' "$skill_md" || fail "$(basename "$skill_dir"): missing frontmatter delimiter"
  grep -q '^name:' "$skill_md" || fail "$(basename "$skill_dir"): missing frontmatter name"
  grep -q '^description:' "$skill_md" || fail "$(basename "$skill_dir"): missing frontmatter description"

  required_sections=("${default_required_sections[@]}")
  if [[ "$(basename "$skill_dir")" == "manage-up-core" ]]; then
    required_sections=("${core_required_sections[@]}")
  fi

  for section in "${required_sections[@]}"; do
    grep -q "$section" "$skill_md" || fail "$(basename "$skill_dir"): missing section '$section'"
  done

  grep -q '### 用户输入\|### User Input' "$examples_md" || fail "$(basename "$skill_dir"): examples missing user input section"
  grep -q '### ManageUp 输出\|### ManageUp Output\|### ManageUp 行为' "$examples_md" || fail "$(basename "$skill_dir"): examples missing ManageUp output section"
done

[[ "$skill_count" -gt 0 ]] || fail "no skills found"

echo "Validated $skill_count skills successfully."
