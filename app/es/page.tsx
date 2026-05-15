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
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Macaw Transcribe | Transcripción Privada para Conversaciones Largas',
  description:
    'Transcripción autoalojada y consciente del hablante para entrevistas, podcasts, llamadas de investigación y notas habladas. Revisa mientras se procesa. Controla tu audio.',
};

export default function HomeES() {
  const t = getTranslations('es');
  const locale = 'es';

  return (
    <main className="min-h-screen">
      <Header t={t} locale={locale} />
      <Hero t={t} locale={locale} />
      <Footer t={t} locale={locale} />
    </main>
  );
}
