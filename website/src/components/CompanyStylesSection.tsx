import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building2 } from 'lucide-react';

const companies = [
  {
    id: 'bytedance',
    logo: '🔥',
    nameZh: '字节跳动',
    nameEn: 'ByteDance',
    frameworkZh: 'OKR 驱动',
    frameworkEn: 'OKR-Driven',
    descZh: '以飞书 OKR 为核心，强调对齐链、KR 进度百分比和高信息密度复盘。',
    descEn: 'Centered on Lark OKR system. Emphasizes alignment chains, KR progress tracking, and high-density retrospectives.',
    tagsZh: ['OKR 对齐', 'KR 进度', '复盘'],
    tagsEn: ['OKR alignment', 'KR tracking', 'Retrospective'],
  },
  {
    id: 'alibaba',
    logo: '🏮',
    nameZh: '阿里巴巴',
    nameEn: 'Alibaba',
    frameworkZh: '双轨制（业绩 + 价值观）',
    frameworkEn: 'Dual-Track (Performance + Values)',
    descZh: '业绩和新六脉神剑价值观并重，用"场景-选择-结果"证明价值观践行。',
    descEn: 'Equal weight on KPIs and New Six Values. Values evidence follows a "Situation-Choice-Result" structure.',
    tagsZh: ['KPI 达成', '价值观实践', '述职'],
    tagsEn: ['KPI achievement', 'Values evidence', 'Promotion review'],
  },
  {
    id: 'tencent',
    logo: '🐧',
    nameZh: '腾讯',
    nameEn: 'Tencent',
    frameworkZh: '产品指标驱动',
    frameworkEn: 'Product-Metric-Driven',
    descZh: '数据先说，核心指标带周环比/月环比，项目有阶段有节点，依赖方明确。',
    descEn: 'Data first. All metrics include WoW/MoM trends. Projects tracked by stage and milestone with clear dependencies.',
    tagsZh: ['数据先说', '环比趋势', '项目闭环'],
    tagsEn: ['Data first', 'WoW trends', 'Project closure'],
  },
  {
    id: 'google',
    logo: '🔍',
    nameZh: 'Google',
    nameEn: 'Google',
    frameworkZh: 'OKR + GRAD 绩效',
    frameworkEn: 'OKR + GRAD Reviews',
    descZh: 'Outcome-based KRs，0.0-1.0 评分，强调 impact narrative 和 stretch goals。',
    descEn: 'Outcome-based KRs with 0.0-1.0 scoring. Emphasizes impact narratives and appropriately ambitious stretch goals.',
    tagsZh: ['Outcome KR', 'Impact 叙事', 'Stretch 目标'],
    tagsEn: ['Outcome KRs', 'Impact narrative', 'Stretch goals'],
  },
  {
    id: 'amazon',
    logo: '📦',
    nameZh: 'Amazon',
    nameEn: 'Amazon',
    frameworkZh: '叙事文化 + Leadership Principles',
    frameworkEn: 'Narrative Culture + Leadership Principles',
    descZh: '6-pager 叙事备忘录风格，每个成就标注 LP 行为证据，数据先于形容词。',
    descEn: '6-pager narrative style. Accomplishments tagged with LP behavioral evidence. Numbers over adjectives.',
    tagsZh: ['LP 行为证据', '6-pager', 'Forte'],
    tagsEn: ['LP evidence', '6-pager', 'Forte review'],
  },
  {
    id: 'microsoft',
    logo: '🪟',
    nameZh: 'Microsoft',
    nameEn: 'Microsoft',
    frameworkZh: 'Connects + Model/Coach/Care',
    frameworkEn: 'Connects + Model/Coach/Care',
    descZh: '强调 impact + growth mindset，成就与成长并重，鼓励展现真实学习和发展领域。',
    descEn: 'Emphasizes impact and growth mindset. Balanced reflection on wins and development areas. Coaching-friendly tone.',
    tagsZh: ['Impact 导向', 'Growth Mindset', 'Connects'],
    tagsEn: ['Impact-driven', 'Growth mindset', 'Connects'],
  },
];

export function CompanyStylesSection() {
  const { language } = useLanguage();
  const isZh = language === 'zh';

  return (
    <section id="company-styles" className="py-20 md:py-32 bg-card/50">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {isZh ? '大厂汇报风格' : 'Company Reporting Styles'}
          </h2>
          <p className="text-lg text-muted-foreground">
            {isZh
              ? '适配 6 家顶级科技公司的汇报格式，让你的报告符合公司文化'
              : 'Adapted for 6 top tech companies — match your report to your company culture'}
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {companies.map((company) => (
            <Card
              key={company.id}
              className="p-6 hover:shadow-lg hover:border-accent/50 transition-all group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{company.logo}</span>
                <Building2 className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-1">
                {isZh ? company.nameZh : company.nameEn}
              </h3>
              <p className="text-sm font-medium text-accent mb-3">
                {isZh ? company.frameworkZh : company.frameworkEn}
              </p>
              <p className="text-sm text-muted-foreground mb-4">
                {isZh ? company.descZh : company.descEn}
              </p>
              <div className="flex flex-wrap gap-2">
                {(isZh ? company.tagsZh : company.tagsEn).map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-lg bg-card border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            {isZh ? '🏢 每个大厂风格都包含' : '🏢 Each Company Style Includes'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {isZh ? '专属报告模板' : 'Dedicated Report Templates'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? '符合该公司文化和考核体系的中英双语模板'
                      : 'Bilingual templates aligned with the company culture and evaluation system'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {isZh ? '关键术语和框架' : 'Key Terms and Frameworks'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? '每家公司特有的评估框架、术语和写作规范'
                      : 'Company-specific evaluation frameworks, terminology, and writing conventions'}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {isZh ? '反空话规则（定制版）' : 'Anti-Fluff Rules (Customized)'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? '针对该公司常见的空话和模糊表达，提供精确替换方案'
                      : 'Targeted replacements for company-specific vague language patterns'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {isZh ? '真实场景示例' : 'Real-World Examples'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {isZh
                      ? '基于该公司文化的完整输入/输出示例'
                      : 'Complete input/output examples grounded in the company culture'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
