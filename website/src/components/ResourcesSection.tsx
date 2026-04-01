import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { externalLinkProps, externalLinks } from '@/const';
import { FileText, Github, Linkedin, Package, Twitter } from 'lucide-react';

export function ResourcesSection() {
  const { t, language } = useLanguage();

  return (
    <section id="resources" className="relative overflow-hidden py-20 md:py-32 bg-background">
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(37,99,235,0.03),transparent)]" />
      <div className="container">
        {/* Section Header */}
        <div className="relative mx-auto mb-16 max-w-2xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{t.resources.title}</h2>
          <p className="text-lg text-muted-foreground">{t.resources.subtitle}</p>
        </div>

        {/* Download Cards */}
        <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2">
          {/* SKILL.md Download */}
          <Card className="group relative overflow-hidden border-accent/20 p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-accent to-primary" />
            <div className="flex items-start justify-between mb-6">
              <FileText className="h-12 w-12 text-accent" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t.resources.sourceLabel}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">{t.resources.skillmd}</h3>
            <p className="text-muted-foreground mb-6">
              {language === 'zh'
                ? '方法论、说明文档和迭代内容目前统一维护在 ManageUp GitHub 仓库中。'
                : 'The methodology, documentation, and ongoing iteration currently live in the ManageUp GitHub repository.'}
            </p>

            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">{t.resources.includes}</span>
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• {language === 'zh' ? '五大原则详解' : 'Five principles explained'}</li>
                  <li>• {language === 'zh' ? '禁用词对照表' : 'Forbidden words table'}</li>
                  <li>• {language === 'zh' ? '受众分析框架' : 'Audience analysis framework'}</li>
                  <li>• {language === 'zh' ? '质量检查清单' : 'Quality checklist'}</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground">{t.resources.hostedInRepo}</p>
              <Button asChild className="w-full gap-2">
                <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
                  <Github className="h-4 w-4" />
                  {t.resources.openProject}
                </a>
              </Button>
            </div>
          </Card>

          {/* Templates Download */}
          <Card className="group relative overflow-hidden p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-xl">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-accent" />
            <div className="flex items-start justify-between mb-6">
              <Package className="h-12 w-12 text-primary" />
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                {t.resources.templatesLabel}
              </span>
            </div>

            <h3 className="text-2xl font-semibold text-foreground mb-3">{t.resources.templates}</h3>
            <p className="text-muted-foreground mb-6">
              {language === 'zh'
                ? '当前没有独立模板下载包，模板结构和后续补充会直接沉淀在项目仓库。'
                : 'There is no separate download package yet; template structures and future additions are published in the project repository.'}
            </p>

            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                <p>
                  <span className="font-semibold text-foreground">{t.resources.templatesIncludes}</span>
                </p>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• {language === 'zh' ? '周报/月报' : 'Weekly/Monthly Report'}</li>
                  <li>• {language === 'zh' ? '项目进展' : 'Project Update'}</li>
                  <li>• {language === 'zh' ? '绩效自评' : 'Performance Review'}</li>
                  <li>• {language === 'zh' ? '提案/申请' : 'Proposal/Request'}</li>
                </ul>
              </div>
              <p className="text-xs text-muted-foreground">{t.resources.hostedInRepo}</p>
              <Button asChild variant="outline" className="w-full gap-2">
                <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
                  <Package className="h-4 w-4" />
                  {t.resources.openTemplates}
                </a>
              </Button>
            </div>
          </Card>
        </div>

        <div className="mx-auto mt-16 grid max-w-5xl gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
          <div className="rounded-[28px] border border-border bg-gradient-to-br from-accent/6 via-card to-primary/6 p-8 shadow-sm">
            <h3 className="text-2xl font-semibold text-foreground mb-3">{t.creator.title}</h3>
            <p className="text-muted-foreground mb-6 leading-7">{t.creator.description}</p>
            <p className="mb-6 text-sm text-muted-foreground">{t.creator.note}</p>
            <div className="flex flex-wrap gap-3">
            <Button asChild variant="outline">
              <a href={externalLinks.linkedin} {...externalLinkProps}>
                <Linkedin className="h-4 w-4" />
                {t.creator.linkedin}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={externalLinks.githubProfile} {...externalLinkProps}>
                <Github className="h-4 w-4" />
                {t.creator.github}
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href={externalLinks.x} {...externalLinkProps}>
                <Twitter className="h-4 w-4" />
                {t.creator.x}
              </a>
            </Button>
            </div>
          </div>

          <div className="rounded-[28px] border border-primary/20 bg-primary/[0.03] p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {language === 'zh' ? '主落地页' : 'Primary Destination'}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-foreground">
              {language === 'zh' ? '先看项目仓库，再看作者背景' : 'Start with the repo, then the creator context'}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {language === 'zh'
                ? '如果你是第一次来到这个网站，最值得点开的入口仍然是 ManageUp GitHub。那里有方法、模板、说明和后续更新。'
                : 'If this is your first visit, the repo is still the highest-value click. It holds the method, templates, docs, and future updates.'}
            </p>
            <Button asChild className="mt-6 w-full gap-2">
              <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
                <Github className="h-4 w-4" />
                {t.resources.openProject}
              </a>
            </Button>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="mx-auto mt-16 max-w-5xl rounded-[28px] border border-border bg-card/90 p-8 shadow-sm backdrop-blur">
          <h3 className="text-2xl font-semibold text-foreground mb-6">
            {language === 'zh' ? '📚 更多入口' : '📚 More Entry Points'}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {t.resources.projectRepo}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.resources.projectRepoDesc}
              </p>
              <a
                href={externalLinks.manageUpRepo}
                {...externalLinkProps}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {t.resources.visitProject} →
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {t.resources.creatorLinkedIn}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.resources.creatorLinkedInDesc}
              </p>
              <a
                href={externalLinks.linkedin}
                {...externalLinkProps}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {t.resources.viewProfile} →
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {t.resources.creatorGithub}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.resources.creatorGithubDesc}
              </p>
              <a
                href={externalLinks.githubProfile}
                {...externalLinkProps}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {t.resources.viewProfile} →
              </a>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">
                {t.resources.creatorX}
              </h4>
              <p className="text-sm text-muted-foreground mb-3">
                {t.resources.creatorXDesc}
              </p>
              <a
                href={externalLinks.x}
                {...externalLinkProps}
                className="text-sm font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {t.resources.viewProfile} →
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            {language === 'zh'
              ? '准备好从项目仓库里直接了解 ManageUp 的方法与模板了吗？'
              : 'Ready to explore the method and templates directly from the repository?'}
          </p>
          <Button asChild size="lg" className="gap-2">
            <a href={externalLinks.manageUpRepo} {...externalLinkProps}>
              {t.resources.openProject}
              <Github className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
