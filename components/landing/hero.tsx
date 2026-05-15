import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github } from 'lucide-react';
import { ProductMockup } from './product-mockup';
import type { Translations, Locale } from '@/lib/translations';

interface HeroProps {
  t: Translations;
  locale: Locale;
}

export function Hero({ t, locale }: HeroProps) {
  const basePath = locale === 'es' ? '/es' : '';
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-subtle border border-border text-sm text-text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse-soft" />
            {t.hero.badge}
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-foreground tracking-tight leading-[1.1] mb-6 text-balance">
            {t.hero.headlinePre}
            <span className="font-serif text-brand-primary">
              {t.hero.headlineAccent}
            </span>{' '}
            {t.hero.headlinePost}{' '}
            <span className="font-serif text-brand-primary">
              {t.hero.headlineAccent2}
            </span>{' '}
            {t.hero.headlinePost2}
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-3xl mx-auto mb-10 text-pretty">
            {t.hero.subheadline}
          </p>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-subtle border border-border text-sm text-text-secondary mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-highlight animate-pulse-soft" />
            {t.hero.firstRelease}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              asChild
              className="bg-brand-primary hover:bg-brand-primary-hover text-white px-8 h-12 text-base"
            >
              <Link href="#waitlist">
                {t.hero.ctaPrimary}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-border text-text-secondary hover:bg-surface-subtle px-8 h-12 text-base"
            >
              <Link
                href="https://github.com/samuelkb"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                {t.hero.ctaSecondary}
              </Link>
            </Button>
          </div>
        </div>

        {/* Product Mockup */}
        <ProductMockup t={t} />
      </div>
    </section>
  );
}
