import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { FileText } from 'lucide-react';

export function TemplatesSection() {
  const { t, language } = useLanguage();

  const templateIcons = ['📋', '📊', '⭐', '💡', '📝', '🎯'];

  return (
    <section id="templates" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.templates.title}</h2>
          <p className="text-lg text-muted-foreground">{t.templates.subtitle}</p>
        </div>

        {/* Templates Grid */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.templates.types.map((template, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg hover:border-accent/50 transition-all cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-4xl">{templateIcons[index]}</span>
                <FileText className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
              </div>
              <h3 className="font-semibold text-lg text-foreground mb-2">{template.name}</h3>
              <p className="text-sm text-muted-foreground">{template.description}</p>
              <div className="mt-4 pt-4 border-t border-border">
                <button className="text-sm font-medium text-accent hover:text-accent/80 transition-colors">
                  {language === 'zh' ? '查看模板 →' : 'View Template →'}
                </button>
              </div>
            </Card>
          ))}
        </div>

        {/* Key Features */}
        <div className="max-w-4xl mx-auto mt-16 p-8 rounded-lg bg-card border border-border">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            {language === 'zh' ? '✅ 每个模板都包含' : '✅ Each Template Includes'}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {language === 'zh' ? '结构化框架' : 'Structured Framework'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh'
                      ? '开箱即用的报告结构，遵循五大原则'
                      : 'Ready-to-use structure following the five principles'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {language === 'zh' ? '真实案例' : 'Real Examples'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh'
                      ? '职场常见场景的完整示例'
                      : 'Complete examples from real workplace scenarios'}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {language === 'zh' ? '检查清单' : 'Quality Checklist'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh'
                      ? '确保报告质量的验证清单'
                      : 'Verification checklist for report quality'}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-accent font-bold">•</span>
                <div>
                  <p className="font-medium text-foreground">
                    {language === 'zh' ? '可复用组件' : 'Reusable Components'}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {language === 'zh'
                      ? '可以跨报告类型复用的内容块'
                      : 'Content blocks reusable across report types'}
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
