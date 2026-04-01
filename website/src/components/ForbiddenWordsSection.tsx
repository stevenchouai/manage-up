import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function ForbiddenWordsSection() {
  const { t, language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="forbidden-words" className="py-20 md:py-32 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.forbiddenWords.title}</h2>
          <p className="text-lg text-muted-foreground">{t.forbiddenWords.subtitle}</p>
        </div>

        {/* Table - Desktop */}
        <div className="hidden md:block max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left px-6 py-4 font-semibold text-foreground bg-background/50">
                  {t.forbiddenWords.table.vague}
                </th>
                <th className="text-left px-6 py-4 font-semibold text-foreground bg-background/50">
                  {t.forbiddenWords.table.precise}
                </th>
              </tr>
            </thead>
            <tbody>
              {t.forbiddenWords.examples.map((example, index) => (
                <tr key={index} className="border-b border-border hover:bg-background/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-muted-foreground">{example.vague}</td>
                  <td className="px-6 py-4 text-sm font-medium text-accent">{example.precise}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Accordion - Mobile */}
        <div className="md:hidden max-w-2xl mx-auto space-y-3">
          {t.forbiddenWords.examples.map((example, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden bg-background">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full px-4 py-3 flex items-center justify-between hover:bg-card transition-colors text-left"
              >
                <span className="text-sm font-medium text-muted-foreground line-clamp-2">
                  {example.vague}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-muted-foreground flex-shrink-0 transition-transform ${
                    expandedIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {expandedIndex === index && (
                <div className="border-t border-border px-4 py-3 bg-card">
                  <p className="text-sm text-accent font-medium">{example.precise}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Tips */}
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
            <h4 className="font-semibold text-foreground mb-2">✨ {language === 'zh' ? '替换技巧' : 'Replacement Tips'}</h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>• {language === 'zh' ? '用数字替代形容词' : 'Replace adjectives with numbers'}</li>
              <li>• {language === 'zh' ? '用具体日期替代时间词' : 'Replace time words with specific dates'}</li>
              <li>• {language === 'zh' ? '用百分比替代"部分"' : 'Replace "some" with percentages'}</li>
              <li>• {language === 'zh' ? '用影响范围替代风险词' : 'Replace risk words with impact scope'}</li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-2">🎯 {language === 'zh' ? '核心原则' : 'Core Principle'}</h4>
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '每一个判断都必须挂钩到具体数据。如果你不能用数字支撑，那就不要写。'
                : 'Every claim must be tied to concrete data. If you cannot support it with numbers, do not write it.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
