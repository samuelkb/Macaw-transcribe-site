import { Clock, Users, Shield, Cpu, RotateCcw } from 'lucide-react';
import type { Translations } from '@/lib/translations';

interface ProblemSectionProps {
  t: Translations;
}

export function ProblemSection({ t }: ProblemSectionProps) {
  const problems = [
    {
      icon: Clock,
      title: t.problem.card1Title,
      description: t.problem.card1Description,
    },
    {
      icon: Users,
      title: t.problem.card2Title,
      description: t.problem.card2Description,
    },
    {
      icon: Shield,
      title: t.problem.card3Title,
      description: t.problem.card3Description,
    },
    {
      icon: Cpu,
      title: t.problem.card4Title,
      description: t.problem.card4Description,
    },
    {
      icon: RotateCcw,
      title: t.problem.card5Title,
      description: t.problem.card5Description,
    },
  ];
  return (
    <section className="py-20 lg:py-28 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            {t.problem.title}
            <span className="font-serif text-brand-primary">
              {t.problem.titleAccent}
            </span>
            {t.problem.titlePost}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            {t.problem.description}
          </p>
        </div>

        <div className="grid md:grid-cols-6 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className={[
                'p-6 rounded-2xl bg-surface border border-border hover:shadow-lg transition-shadow',
                'md:col-span-2',
                index === 3 ? 'md:col-start-2' : '',
              ].join(' ')}
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center mb-5">
                <problem.icon className="w-6 h-6 text-brand-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
