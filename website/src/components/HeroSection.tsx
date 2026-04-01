import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { externalLinkProps, externalLinks } from '@/const';
import { ArrowRight, ChevronRight, Github, Linkedin, Sparkles, Twitter } from 'lucide-react';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background py-20 md:py-32">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(37,99,235,0.12),transparent_35%),linear-gradient(to_bottom,transparent,rgba(15,23,42,0.02))]" />
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_360px]">
            <div className="text-center lg:text-left space-y-8">
          {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent">
                <Sparkles className="h-4 w-4" />
                <span>{t.hero.announcement}</span>
              </div>

              <div className="inline-block">
                <span className="rounded-full border border-border/60 bg-background/80 px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm">
              {t.hero.subtitle}
                </span>
              </div>

          {/* Main Title */}
              <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                <span className="text-primary">{t.hero.title}</span>
              </h1>

          {/* Subtitle */}
              <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl lg:mx-0">
                {t.hero.description}
              </p>

          {/* CTA Buttons */}
              <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row lg:justify-start">
                <Button asChild size="lg" className="gap-2">
                  <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
                    {t.hero.cta}
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection('resources')}
                >
                  {t.hero.secondaryCta}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="grid gap-4 pt-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4 text-left shadow-sm backdrop-blur">
                  <div className="text-lg font-semibold text-foreground">{t.hero.stats.principle.value}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.stats.principle.label}</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4 text-left shadow-sm backdrop-blur">
                  <div className="text-lg font-semibold text-foreground">{t.hero.stats.templates.value}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.stats.templates.label}</p>
                </div>
                <div className="rounded-2xl border border-border/70 bg-background/80 p-4 text-left shadow-sm backdrop-blur">
                  <div className="text-lg font-semibold text-foreground">{t.hero.stats.bilingual.value}</div>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.stats.bilingual.label}</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-[28px] bg-primary/8 blur-2xl" />
              <div className="relative rounded-[28px] border border-border/70 bg-background/90 p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between border-b border-border/70 pb-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                      ManageUp
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-foreground">{t.hero.cta}</h3>
                  </div>
                  <div className="rounded-full bg-accent/10 p-3 text-accent">
                    <Github className="h-5 w-5" />
                  </div>
                </div>

                <div className="space-y-4 pt-6">
                  <div className="rounded-2xl bg-card p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{t.hero.proof.repo}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.proof.repoDesc}</p>
                      </div>
                      <ChevronRight className="mt-1 h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>
                  <div className="rounded-2xl bg-card p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-foreground">{t.hero.proof.author}</h4>
                        <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.proof.authorDesc}</p>
                      </div>
                      <div className="flex gap-2 text-muted-foreground">
                        <Linkedin className="h-4 w-4" />
                        <Twitter className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                  <div className="rounded-2xl bg-card p-4">
                    <h4 className="font-semibold text-foreground">{t.hero.proof.action}</h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{t.hero.proof.actionDesc}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
