import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { externalLinkProps, externalLinks } from '@/const';
import { Globe } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { key: 'principles', label: t.nav.principles, id: 'principles' },
    { key: 'forbiddenWords', label: t.nav.forbiddenWords, id: 'forbidden-words' },
    { key: 'templates', label: t.nav.templates, id: 'templates' },
    { key: 'companyStyles', label: language === 'zh' ? '大厂风格' : 'Company Styles', id: 'company-styles' },
    { key: 'audience', label: t.nav.audience, id: 'audience' },
    { key: 'workflow', label: t.nav.workflow, id: 'workflow' },
    { key: 'checklist', label: t.nav.checklist, id: 'checklist' },
    { key: 'resources', label: t.nav.resources, id: 'resources' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold text-primary">ManageUp</div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => scrollToSection(item.id)}
              className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Language Toggle & Mobile Menu */}
        <div className="flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="hidden md:inline-flex">
            <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
              {t.header.projectCta}
            </a>
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
            className="gap-2"
          >
            <Globe className="h-4 w-4" />
            <span className="text-xs font-medium">{language === 'zh' ? 'EN' : '中文'}</span>
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-card rounded-md transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <nav className="container py-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded transition-colors"
              >
                {item.label}
              </button>
            ))}
            <a
              href={externalLinks.manageUpRepo}
              {...externalLinkProps}
              className="block rounded bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {t.header.projectCta}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
