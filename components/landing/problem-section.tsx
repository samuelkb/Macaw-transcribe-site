import { Clock, Users, Shield, Cpu, RotateCcw } from 'lucide-react';

const problems = [
  {
    icon: Clock,
    title: 'Long recordings are hard to review',
    description:
      'Hours of audio turn into walls of text. Scrubbing through recordings to verify transcripts is tedious and error-prone.',
  },
  {
    icon: Users,
    title: 'Speaker context gets lost',
    description:
      'Without clear diarization, conversations become confusing. Who said what matters, especially in interviews and research.',
  },
  {
    icon: Shield,
    title: 'Private audio deserves private infrastructure',
    description:
      "Sensitive conversations shouldn't require uploading to third-party servers. Your audio should stay under your control.",
  },
  {
    icon: Cpu,
    title: 'Local hardware is often underused',
    description:
      'Many self-hosted transcription workflows are not tuned for modern Mac hardware, turning powerful machines into slow, inefficient transcription boxes.',
  },
  {
    icon: RotateCcw,
    title: 'Errors show up too late',
    description:
      'You often discover accuracy problems only after the full transcript is done. Fixing one bad section should not mean starting the whole recording over.',
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            Long conversations hold{' '}
            <span className="font-serif text-brand-primary">valuable</span>{' '}
            knowledge
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            But most transcription tools are either too opaque, too
            SaaS-dependent, or difficult to review carefully.
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
