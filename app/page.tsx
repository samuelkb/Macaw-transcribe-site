import { Header } from '@/components/landing/header';
import { Hero } from '@/components/landing/hero';
import { ProblemSection } from '@/components/landing/problem-section';
import { SolutionSection } from '@/components/landing/solution-section';
import { WorkflowSection } from '@/components/landing/workflow-section';
import { UseCasesSection } from '@/components/landing/use-cases-section';
import { DifferentiatorsSection } from '@/components/landing/differentiators-section';
import { OpenSourceSection } from '@/components/landing/open-source-section';
import { EarlyAccessSection } from '@/components/landing/early-access-section';
import { Footer } from '@/components/landing/footer';
import { getTranslations } from '@/lib/translations';

export default function Home() {
  const t = getTranslations('en');
  const locale = 'en';
  return (
    <main className="min-h-screen">
      <Header t={t} locale={locale} />
      <Hero t={t} locale={locale} />
      <ProblemSection />
      <SolutionSection />
      <WorkflowSection />
      <UseCasesSection />
      <DifferentiatorsSection />
      <OpenSourceSection />
      <EarlyAccessSection />
      <Footer t={t} locale={locale} />
    </main>
  );
}
