import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function WorkflowSection() {
  const { t, language } = useLanguage();

  return (
    <section id="workflow" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.workflow.title}</h2>
          <p className="text-lg text-muted-foreground">{t.workflow.subtitle}</p>
        </div>

        {/* Workflow Steps */}
        <div className="max-w-5xl mx-auto">
          {/* Desktop View */}
          <div className="hidden md:grid grid-cols-5 gap-4 mb-12">
            {t.workflow.steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step Card */}
                <Card className="p-6 text-center h-full flex flex-col items-center justify-center hover:shadow-lg hover:border-accent/50 transition-all">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <span className="text-2xl font-bold text-accent">{step.number}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>

                {/* Arrow */}
                {index < t.workflow.steps.length - 1 && (
                  <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-muted-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile View */}
          <div className="md:hidden space-y-4">
            {t.workflow.steps.map((step, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-lg font-bold text-accent">{step.number}</span>
                  </div>
                  {index < t.workflow.steps.length - 1 && (
                    <div className="w-0.5 h-16 bg-border mt-2" />
                  )}
                </div>
                <Card className="p-4 flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Key Benefits */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
            <h4 className="font-semibold text-foreground mb-2">✅ {language === 'zh' ? '数据优先' : 'Data First'}</h4>
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '先收集事实，再组织表达。避免空话，确保每句话都有数据支撑。'
                : 'Collect facts first, then organize. Avoid fluff—every statement is data-backed.'}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">🎯 {language === 'zh' ? '结论优先' : 'Conclusion First'}</h4>
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '从数据中提取最重要的结论，放在报告的第一句。让老板一眼看到核心。'
                : 'Extract the most important conclusion from data. Lead with it. Let your boss see the core immediately.'}
            </p>
          </div>
          <div className="p-6 rounded-lg bg-secondary/5 border border-secondary/20">
            <h4 className="font-semibold text-foreground mb-2">🚀 {language === 'zh' ? '行动导向' : 'Action-Oriented'}</h4>
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '报告是决策工具，不是日记。明确说明需要老板做什么、何时做、不做会怎样。'
                : 'Reports are decision tools, not diaries. State clearly what you need, when, and what happens if not done.'}
            </p>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="max-w-4xl mx-auto mt-12 p-8 rounded-lg bg-gradient-to-r from-accent/5 to-primary/5 border border-accent/20">
          <h3 className="font-semibold text-foreground mb-3">💡 {language === 'zh' ? '专业提示' : 'Pro Tip'}</h3>
          <p className="text-muted-foreground">
            {language === 'zh'
              ? '这五个步骤不是线性的。在实际工作中，你可能会在步骤 2 和 3 之间反复迭代，直到找到最清晰的结论。关键是不要跳过任何一步——尤其是第 2 步（收集数据）。'
              : 'These five steps are not strictly linear. In practice, you may iterate between steps 2 and 3 until you find the clearest conclusion. The key is not to skip any step—especially step 2 (gather data).'}
          </p>
        </div>
      </div>
    </section>
  );
}
