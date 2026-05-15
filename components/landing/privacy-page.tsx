'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Translations } from '@/lib/translations';

interface PrivacyPageProps {
  t: Translations;
  locale: 'en' | 'es';
}

export function PrivacyPage({ t, locale }: PrivacyPageProps) {
  const homeHref = locale === 'en' ? '/' : '/es';

  return (
    <div className="min-h-screen bg-background">
      {/* Simple header */}
      <header className="border-b border-border bg-surface/80 backdrop-blur-sm">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.privacy.backToHome}
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <h1 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-6">
          {t.privacy.heading}
        </h1>

        <p className="text-lg text-text-secondary mb-12 leading-relaxed">
          {t.privacy.intro}
        </p>

        <div className="space-y-10">
          {/* Section 1: Email collection */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.section1Title}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t.privacy.section1Content}
            </p>
          </section>

          {/* Section 2: Self-hosted by design */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.section2Title}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t.privacy.section2Content}
            </p>
          </section>

          {/* Section 3: This landing page */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.section3Title}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t.privacy.section3Content}
            </p>
          </section>

          {/* Section 4: Questions */}
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {t.privacy.section4Title}
            </h2>
            <p className="text-text-secondary leading-relaxed">
              {t.privacy.section4Content}
            </p>
          </section>
        </div>

        {/* Back link at bottom */}
        <div className="mt-16 pt-8 border-t border-border">
          <Link
            href={homeHref}
            className="inline-flex items-center gap-2 text-brand-primary hover:text-brand-primary-hover transition-colors font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.privacy.backToHome}
          </Link>
        </div>
      </main>
    </div>
  );
}
