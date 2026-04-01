import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function PrinciplesSection() {
  const { t, language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  const principles = [
    {
      name: t.principles.bluf.name,
      description: t.principles.bluf.description,
      details: t.principles.bluf.details,
      icon: '📍',
    },
    {
      name: t.principles.dataAnchored.name,
      description: t.principles.dataAnchored.description,
      details: t.principles.dataAnchored.details,
      icon: '📊',
    },
    {
      name: t.principles.soWhat.name,
      description: t.principles.soWhat.description,
      details: t.principles.soWhat.details,
      icon: '❓',
    },
    {
      name: t.principles.decisionReady.name,
      description: t.principles.decisionReady.description,
      details: t.principles.decisionReady.details,
      icon: '✅',
    },
    {
      name: t.principles.calibratedLanguage.name,
      description: t.principles.calibratedLanguage.description,
      details: t.principles.calibratedLanguage.details,
      icon: '🎯',
    },
  ];

  return (
    <section id="principles" className="py-20 md:py-32 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.principles.title}</h2>
          <p className="text-lg text-muted-foreground">{t.principles.subtitle}</p>
        </div>

        {/* Principles Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-card hover:border-accent/50 transition-colors"
            >
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-start justify-between hover:bg-background/50 transition-colors text-left"
              >
                <div className="flex items-start gap-4 flex-1">
                  <span className="text-3xl mt-1">{principle.icon}</span>
                  <div>
                    <h3 className="font-semibold text-lg text-foreground">{principle.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{principle.description}</p>
                  </div>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform mt-1 ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Expanded Details */}
              {expandedIndex === index && (
                <div className="border-t border-border px-6 py-4 bg-background/50">
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.details}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Key Insight */}
        <div className="max-w-4xl mx-auto mt-12 p-6 rounded-lg bg-accent/5 border border-accent/20">
          <p className="text-center text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">
              {language === 'zh' ? '💡 核心洞察：' : '💡 Key Insight: '}
            </span>
            {language === 'zh'
              ? '这五大原则不是独立的，而是相互支撑的体系。BLUF 确保结论优先，数据锚定提供支撑，So-What 测试确保相关性，行动导向明确要求，校准语言提高精确度。'
              : 'These five principles are not standalone—they form an integrated system. BLUF ensures conclusions come first, data anchoring provides support, the So-What test ensures relevance, decision-ready clarifies requirements, and calibrated language improves precision.'}
          </p>
        </div>
      </div>
    </section>
  );
}
