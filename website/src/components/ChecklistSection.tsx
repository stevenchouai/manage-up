import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { Check } from 'lucide-react';

export function ChecklistSection() {
  const { t, language } = useLanguage();
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(t.checklist.items.length).fill(false));

  const toggleCheck = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  const completedCount = checkedItems.filter(Boolean).length;
  const totalCount = checkedItems.length;
  const completionPercentage = Math.round((completedCount / totalCount) * 100);

  return (
    <section id="checklist" className="py-20 md:py-32 bg-card">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.checklist.title}</h2>
          <p className="text-lg text-muted-foreground">{t.checklist.subtitle}</p>
        </div>

        {/* Main Checklist */}
        <div className="max-w-3xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8 p-6 rounded-lg bg-background border border-border">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-foreground">
                {language === 'zh' ? '检查进度' : 'Completion Progress'}
              </h3>
              <span className="text-sm font-medium text-accent">
                {completedCount}/{totalCount} ({completionPercentage}%)
              </span>
            </div>
            <div className="w-full h-2 bg-border rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Checklist Items */}
          <div className="space-y-3">
            {t.checklist.items.map((item, index) => (
              <button
                key={index}
                onClick={() => toggleCheck(index)}
                className="w-full p-4 rounded-lg border border-border bg-background hover:bg-card hover:border-accent/50 transition-all text-left flex items-start gap-4 group"
              >
                {/* Checkbox */}
                <div
                  className={`flex-shrink-0 w-6 h-6 rounded border-2 flex items-center justify-center transition-all ${
                    checkedItems[index]
                      ? 'bg-accent border-accent'
                      : 'border-border group-hover:border-accent/50'
                  }`}
                >
                  {checkedItems[index] && <Check className="h-4 w-4 text-accent-foreground" />}
                </div>

                {/* Item Text */}
                <span
                  className={`text-sm transition-all ${
                    checkedItems[index]
                      ? 'text-muted-foreground line-through'
                      : 'text-foreground'
                  }`}
                >
                  {item}
                </span>
              </button>
            ))}
          </div>

          {/* Completion Message */}
          {completionPercentage === 100 && (
            <div className="mt-8 p-6 rounded-lg bg-accent/10 border border-accent/20 text-center">
              <h4 className="font-semibold text-foreground mb-2">
                {language === 'zh' ? '🎉 完美！' : '🎉 Perfect!'}
              </h4>
              <p className="text-sm text-muted-foreground">
                {language === 'zh'
                  ? '你的报告已经通过了所有质量检查。现在可以自信地提交给老板了！'
                  : 'Your report has passed all quality checks. You\'re ready to submit with confidence!'}
              </p>
            </div>
          )}
        </div>

        {/* Tips Section */}
        <div className="max-w-4xl mx-auto mt-16 grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-lg bg-primary/5 border border-primary/20">
            <h4 className="font-semibold text-foreground mb-3">
              {language === 'zh' ? '💡 检查技巧' : '💡 Checking Tips'}
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • {language === 'zh'
                  ? '大声朗读报告，听听是否自然流畅'
                  : 'Read aloud—does it flow naturally?'}
              </li>
              <li>
                • {language === 'zh'
                  ? '每一段都问自己"所以呢？"'
                  : 'Ask "So what?" after each paragraph'}
              </li>
              <li>
                • {language === 'zh'
                  ? '用查找功能搜索禁用词'
                  : 'Search for forbidden words using Find'}
              </li>
              <li>
                • {language === 'zh'
                  ? '让同事读一遍，听听他们的反馈'
                  : 'Have a colleague review it'}
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-lg bg-accent/5 border border-accent/20">
            <h4 className="font-semibold text-foreground mb-3">
              {language === 'zh' ? '⚠️ 常见问题' : '⚠️ Common Issues'}
            </h4>
            <ul className="text-sm text-muted-foreground space-y-2">
              <li>
                • {language === 'zh'
                  ? '数据不足？回到第 2 步，补充缺失的数据'
                  : 'Missing data? Go back to step 2'}
              </li>
              <li>
                • {language === 'zh'
                  ? '太长？删除不必要的背景信息'
                  : 'Too long? Remove unnecessary context'}
              </li>
              <li>
                • {language === 'zh'
                  ? '没有结论？重新审视数据，提取核心'
                  : 'No conclusion? Review data again'}
              </li>
              <li>
                • {language === 'zh'
                  ? '不知道老板要做什么？明确说明'
                  : 'Unclear what boss should do? State it'}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
