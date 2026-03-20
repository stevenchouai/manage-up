# ManageUp Quality Roadmap

## Why this exists

ManageUp already has a clear point of view, but the repository still feels more like a prompt dump than a polished product. This roadmap defines the next quality bar:

- The repo must be trustworthy: examples cannot invent facts the user did not provide.
- The repo must be maintainable: every skill should follow the same package shape and section contract.
- The repo must be usable: a new contributor should know how to add or improve a skill without guessing.
- The repo must be demoable: the value of "anti-fluff" should be obvious within 2 minutes of landing on the repo.

## Current gaps

### P0: Trust

- Some examples add metrics, dates, or business impact that were not present in the user's input.
- `README.md` says every skill contains `examples.md`, but `manage-up-core` currently does not.

### P1: Maintainability

- There is no automated validation for skill completeness or required sections.
- There is no contributor guide beyond four short bullets in the README.
- There is no CI to stop incomplete or inconsistent skill packages from landing.

### P2: Productization

- The repo has good content, but little "show me" packaging: no quick showcase page, no quality rubric, no visible roadmap.
- Installation and verification guidance exists, but there is no single "how to evaluate output quality" reference.

## Execution plan

### Phase 1: Fix trust and repo hygiene

- Remove invented facts from examples.
- Add `skills/manage-up-core/examples.md`.
- Add a validator for required files and section headings.
- Add CI to run the validator on every change.

### Phase 2: Raise contributor quality

- Add a proper `CONTRIBUTING.md`.
- Define a standard skill package contract.
- Require examples to clearly separate user input from generated output.

### Phase 3: Make the repo feel exciting

- Add a showcase doc with strong before/after transformations across roles.
- Add a "quality rubric" doc that people can use even without installing the skills.
- Add one or two new high-value skills that extend beyond classic status reports, such as upward email drafts or 1:1 prep.

## Definition of done for a high-quality skill

- `SKILL.md` exists and includes triggers, required inputs, templates, anti-fluff rules, and a quality checklist.
- `examples.md` exists and does not invent facts outside the user input.
- The skill works for both Chinese and English requests.
- The examples show measurable improvement over vague baseline output.
- The skill passes repository validation.
