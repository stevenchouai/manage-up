import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { Users } from 'lucide-react';

export function AudienceSection() {
  const { t, language } = useLanguage();

  const audienceIcons = ['👔', '🎯', '🤝', '🌐'];

  return (
    <section id="audience" className="py-20 md:py-32 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.audience.title}</h2>
          <p className="text-lg text-muted-foreground">{t.audience.subtitle}</p>
        </div>

        {/* Audience Cards Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {t.audience.types.map((audience, index) => (
            <Card key={index} className="p-8 hover:shadow-lg hover:border-accent/50 transition-all">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span className="text-4xl">{audienceIcons[index]}</span>
                  <h3 className="text-xl font-semibold text-foreground mt-4">{audience.name}</h3>
                </div>
              </div>

              <div className="space-y-6">
                {/* Focus */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {language === 'zh' ? '关注点' : 'Focus'}
                  </h4>
                  <p className="text-foreground">{audience.focus}</p>
                </div>

                {/* Style */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {language === 'zh' ? '报告风格' : 'Style'}
                  </h4>
                  <p className="text-foreground">{audience.style}</p>
                </div>

                {/* Example */}
                <div>
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-2">
                    {language === 'zh' ? '示例' : 'Example'}
                  </h4>
                  <p className="text-sm text-muted-foreground italic">{audience.example}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Principle */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-lg bg-primary/5 border border-primary/20">
          <div className="flex items-start gap-4">
            <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-semibold text-foreground mb-2">
                {language === 'zh' ? '🎯 受众优先原则' : '🎯 Audience-First Principle'}
              </h3>
              <p className="text-muted-foreground">
                {language === 'zh'
                  ? '不同的受众有不同的信息需求。在写报告前，先问自己：这份报告是给谁的？他们最关心什么？然后根据这个答案调整详略程度、用词和结构。'
                  : 'Different audiences have different information needs. Before writing, ask yourself: Who is this for? What do they care about most? Then adjust the level of detail, language, and structure accordingly.'}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Reference Table */}
        <div className="max-w-4xl mx-auto mt-12">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            {language === 'zh' ? '📋 快速参考' : '📋 Quick Reference'}
          </h3>
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left px-4 py-3 font-semibold text-foreground bg-background/50">
                    {language === 'zh' ? '受众' : 'Audience'}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground bg-background/50">
                    {language === 'zh' ? '信息深度' : 'Detail Level'}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground bg-background/50">
                    {language === 'zh' ? '推荐长度' : 'Length'}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-foreground bg-background/50">
                    {language === 'zh' ? '关键要素' : 'Key Elements'}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {language === 'zh' ? '直属上级' : 'Direct Manager'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '详细' : 'High'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '1-2 页' : '1-2 pages'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '数据、风险、行动项' : 'Data, risks, actions'}
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {language === 'zh' ? '隔级上级' : 'Skip-Level'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '精炼' : 'Medium'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '0.5-1 页' : '0.5-1 page'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '结论、影响、战略' : 'Conclusion, impact, strategy'}
                  </td>
                </tr>
                <tr className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {language === 'zh' ? '跨部门' : 'Cross-Functional'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '接口化' : 'Interface'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '0.5 页' : '0.5 page'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '依赖、时间线、接口' : 'Dependencies, timeline, interface'}
                  </td>
                </tr>
                <tr className="hover:bg-background/50 transition-colors">
                  <td className="px-4 py-3 font-medium text-foreground">
                    {language === 'zh' ? '外部客户' : 'External'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '专业' : 'Professional'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '1 页' : '1 page'}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {language === 'zh' ? '成果、价值、信心' : 'Results, value, confidence'}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
