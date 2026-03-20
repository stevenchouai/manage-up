# Contributing to ManageUp

ManageUp is opinionated on purpose. Contributions should make workplace writing more concrete, more decision-ready, and less fluffy.

## Skill package contract

Each skill lives in `skills/<skill-name>/` and must include:

- `SKILL.md`
- `examples.md`

Most `SKILL.md` files must contain these sections:

- Frontmatter with `name` and `description`
- `## 触发场景`
- `## 必填输入`
- `## 报告模板`
- `## 反空话规则`
- `## 质量检查`

Exception:

- `manage-up-core` is the methodology layer, so it may replace `## 报告模板` with methodology-specific sections such as workflow or framework guidance.

`examples.md` must include:

- At least one realistic user input
- At least one ManageUp output
- No invented facts beyond the provided input

## Non-negotiable quality rules

- Do not fabricate numbers, dates, names, business impact, or deadlines that the user did not provide.
- If information is missing, leave it blank, mark it as `[待确认]`, or explain the uncertainty explicitly.
- Prefer concrete evidence over polished wording.
- Keep Chinese and English guidance aligned in structure and intent.

## Before opening a PR

1. Run `./scripts/validate-skills.sh`.
2. Read your examples line by line and remove any unsupported claims.
3. Check that your skill clearly inherits the ManageUp core principles.
4. Make sure a new user can understand the skill without extra repo context.

## What good contributions look like

- A new report type with a clear business use case
- Better examples that demonstrate anti-fluff writing without hallucination
- Better validation, docs, or installation guidance
- Smaller wording improvements that make prompts more precise and easier for agents to follow
