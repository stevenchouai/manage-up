import { useLanguage } from '@/contexts/LanguageContext';
import { externalLinkProps, externalLinks } from '@/const';

export function Footer() {
  const { t, language } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container py-12 md:py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-primary mb-2">ManageUp</h3>
            <p className="text-sm text-muted-foreground">{t.footer.description}</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.sections}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#principles" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.principles}
                </a>
              </li>
              <li>
                <a href="#forbidden-words" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.forbiddenWords}
                </a>
              </li>
              <li>
                <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.templates}
                </a>
              </li>
              <li>
                <a href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
                  {t.nav.resources}
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={externalLinks.manageUpRepo}
                  {...externalLinkProps}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.github}
                </a>
              </li>
              <li>
                <a
                  href="mailto:feedback@manageup.dev"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t.footer.contact}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {language === 'zh' ? '隐私政策' : 'Privacy Policy'}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  {language === 'zh' ? '服务条款' : 'Terms of Service'}
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">
              {t.footer.creator}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href={externalLinks.linkedin}
                  {...externalLinkProps}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.githubProfile}
                  {...externalLinkProps}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={externalLinks.x}
                  {...externalLinkProps}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} ManageUp. {language === 'zh' ? '保留所有权利。' : 'All rights reserved.'}
            </p>
            <p className="text-sm text-muted-foreground">
              {language === 'zh'
                ? '帮助职场人士写出数据驱动的高质量报告'
                : 'Helping professionals write data-driven, high-quality reports'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
