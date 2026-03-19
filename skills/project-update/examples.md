# 项目进展汇报示例 (Project Status Report Examples)

## 示例一：软件项目进展报告

### 用户输入

```
项目：用户中心 v2.0 重构
目标：统一登录体系，支持 SSO
整体完成 65%，比原计划延迟大概 1 周

里程碑：
- 需求评审完了
- 技术方案完了
- 开发中，大概 60%
- 联调还没开始
- 原计划 4/15 上线

风险：
- 第三方 SSO 接口不太稳定，这周超时了 3 次
- 小王下周开始休假 2 周，少一个前端

团队 5 个人，做得比较吃力

想问老板能不能加一个外包前端
```

### ManageUp 输出

```markdown
# 用户中心 v2.0 重构——进展报告 2026.03.19

## 项目状态：🟡 有风险

**一句话状态**：项目整体完成 65%，较原计划延迟约 1 周。两个主要风险：SSO 供应商接口不稳定 + 前端人力下周起缺 1 人。需决策是否增加外包。

## 里程碑追踪

| 里程碑 | 计划完成 | 实际完成 | 状态 |
|--------|---------|---------|------|
| 需求评审 | 2/15 | 2/14 | ✅ 已完成 |
| 技术方案 | 2/28 | 3/3 | ✅ 已完成（延迟 3 天） |
| 开发 | 3/25 | — | 🔄 进行中 (60%) |
| 联调 | 4/5 | — | ⏳ 未开始 |
| 上线 | 4/15 | — | ⏳ 预计 4/22 |

**总体进度**：65% 完成 | 原计划上线：4/15 | 当前预计：4/22（延迟 ~1 周）

## 本阶段完成

- 用户认证模块开发完成，支持邮箱 + 手机号双通道登录
- SSO 集成框架搭建完成，OAuth 2.0 流程已通
- 用户迁移脚本完成首版，覆盖现有 28,000 用户数据

## 风险矩阵

| 风险 | 概率 | 影响 | 状态 | 应对措施 |
|------|------|------|------|---------|
| SSO 供应商接口不稳定（本周超时 3 次） | 高 | 联调延迟 3-5 天 | 🔴 未解决 | 已向供应商提工单；备选方案：本地缓存 Token 降级 |
| 前端人力缺口（小王 3/24-4/7 休假） | 确定 | 前端进度放缓 40% | 🟡 待决策 | 方案A：加外包 ¥3万/月；方案B：后端兼顾部分前端 |

## 资源状况

| 角色 | 需求 | 到位 | 缺口 |
|------|------|------|------|
| 后端 | 3 | 3 | 充足 |
| 前端 | 2 | 2 → 3/24 起降为 1 | 3/24 起缺 1 人 |

## 需要决策

1. **是否增加 1 名外包前端？**
   - 方案 A（推荐）：增加外包，¥3 万/月，覆盖小王休假期间的前端任务，保住 4/22 上线
   - 方案 B：不增加，由后端同学兼做简单前端，上线可能进一步延迟至 4/30
   - **截止**：3/21（外包公司需 2 天准备人选）
   - **不决策后果**：每延迟 1 天，影响后续 Q2 计划排期
```

---

## Example 2: Non-Technical Project Update (English)

### User Input

```
Project: Office relocation to new building
Overall about 70% done
Moving date planned for April 10

Done so far:
- Signed lease for new office (15,000 sq ft, downtown)
- IT infrastructure setup 80% done - network and servers moved
- Furniture ordered, delivery confirmed for April 3
- Employee seating plan finalized

Issues:
- Building permit for server room modification still pending (applied 3 weeks ago)
- Moving company can't do April 10, earliest is April 12
- 5 employees haven't submitted their equipment requests

Budget: $180K approved, spent $145K so far, estimate $30K remaining
```

### ManageUp Output

```markdown
# Office Relocation — Status Report 2026-03-19

## Status: 🟡 At Risk

**Summary**: Relocation 70% complete but moving date will shift from April 10 to April 12 (moving company availability). Additional risk: server room building permit still pending after 3 weeks. Budget tracking $5K under ($175K estimated vs $180K approved).

## Milestone Tracker

| Milestone | Planned | Actual | Status |
|-----------|---------|--------|--------|
| Lease signed | 2/15 | 2/12 | ✅ Done |
| IT infrastructure setup | 3/15 | — | 🔄 80% complete |
| Furniture delivery | 4/3 | — | ⏳ Confirmed for 4/3 |
| Employee seating plan | 3/10 | 3/8 | ✅ Done |
| Server room modification | 3/20 | — | 🔴 Blocked (permit pending) |
| Move day | 4/10 | — | ⏳ Revised to 4/12 |

**Overall**: 70% complete | Original move date: 4/10 | Revised: 4/12

## Completed

- Lease signed for 15,000 sq ft downtown office (ahead of schedule)
- Network and server migration 80% complete
- Furniture order confirmed for April 3 delivery
- Seating plan finalized for all 85 employees

## Risk Matrix

| Risk | Likelihood | Impact | Status | Mitigation |
|------|-----------|--------|--------|------------|
| Building permit pending (3 weeks) | Medium | Server room not ready → IT setup blocked | 🔴 Open | Follow up with city office this week; escalation path: building manager |
| Moving company date slip (4/10 → 4/12) | Confirmed | 2-day delay | 🟡 Accepted | Adjusted timeline; no downstream impact beyond 2 days |
| 5 employees missing equipment requests | Low | Minor delays in workstation setup | 🟡 Monitoring | Reminder sent, deadline 3/25 |

## Budget

| Category | Approved | Spent | Remaining | Projected Total |
|----------|----------|-------|-----------|----------------|
| Total | $180,000 | $145,000 | $35,000 | ~$175,000 |

Tracking **$5K under budget**.

## Decisions Needed

1. **Accept 2-day move date slip?** Moving company confirmed April 12 as earliest. No other vendors available at comparable cost.
   - Recommendation: Accept April 12. Impact is minimal — falls on a Monday, allows weekend prep.
   - Deadline: 3/21 to confirm with moving company

2. **Escalate building permit?** If not approved by 3/28, server room won't be ready.
   - Recommendation: Have facilities manager call the city permitting office directly
   - Deadline: Take action by 3/21
```
