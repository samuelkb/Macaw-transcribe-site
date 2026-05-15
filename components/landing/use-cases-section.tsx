import {
  Microscope,
  Newspaper,
  Mic2,
  PenTool,
  Lock,
  HeartHandshake,
} from 'lucide-react';

const useCases = [
  {
    icon: Microscope,
    title: 'Researchers',
    subtitle: 'Reviewing interviews',
    description:
      'Process hours of qualitative research interviews. Review transcripts chunk by chunk, with speaker labels intact for analysis.',
    color: 'bg-brand-primary',
  },
  {
    icon: Newspaper,
    title: 'Journalists',
    subtitle: 'Working with sources',
    description:
      'Transcribe confidential conversations without third-party access. Verify quotes against the original audio.',
    color: 'bg-brand-highlight',
  },
  {
    icon: Mic2,
    title: 'Podcasters',
    subtitle: 'Editing long episodes',
    description:
      'Turn multi-hour recordings into searchable transcripts. Edit show notes while the rest of the episode processes.',
    color: 'bg-brand-accent',
  },
  {
    icon: PenTool,
    title: 'Writers',
    subtitle: 'Spoken notes to drafts',
    description:
      'Capture ideas through voice recordings and convert them to editable text. Review and refine your spoken thoughts.',
    color: 'bg-brand-secondary',
  },
  {
    icon: HeartHandshake,
    title: 'Therapists & coaches',
    subtitle: 'Reviewing private sessions',
    description:
      'Turn long conversations into reviewable notes while keeping sensitive audio under your own control.',
  },
  {
    icon: Lock,
    title: 'Privacy-focused teams',
    subtitle: 'Avoiding cloud transcription',
    description:
      'Keep sensitive meeting recordings on your own infrastructure. No data leaves your control.',
    color: 'bg-brand-primary',
  },
];

export function UseCasesSection() {
  return (
    <section id="use-cases" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            Built for people who work with long-form audio
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            Whether you&apos;re conducting research, producing content, or just
            want control over your transcriptions.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={`p-6 rounded-2xl bg-surface border border-border hover:shadow-lg transition-shadow ${
                index === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-11 h-11 rounded-xl ${useCase.color} flex items-center justify-center flex-shrink-0`}
                >
                  <useCase.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {useCase.title}
                  </h3>
                  <p className="text-sm text-text-muted mb-2">
                    {useCase.subtitle}
                  </p>
                  <p className="text-text-secondary leading-relaxed">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
