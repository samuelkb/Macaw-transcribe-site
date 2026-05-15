import {
  Server,
  Layers,
  Users,
  Edit3,
  FileText,
  Download,
  Gauge,
  Cpu,
} from 'lucide-react';
import type { Translations } from '@/lib/translations';

interface SolutionSectionProps {
  t: Translations;
}

const features = [
  {
    icon: Server,
    title: 'Self-hosted by design',
    description:
      'Run on your own machine or private server. Your audio never leaves your infrastructure.',
  },
  {
    icon: Layers,
    title: 'Progressive transcription',
    description:
      'Long recordings are processed in chunks. Start reviewing before everything is finished.',
  },
  {
    icon: Users,
    title: 'Speaker-aware review',
    description:
      'Built-in diarization organizes conversations by speaker. Review context, not just text.',
  },
  {
    icon: Edit3,
    title: 'Chunk-level review and retries',
    description:
      'Fix problems where they happen. Retry difficult sections without restarting the whole recording.',
  },
  {
    icon: FileText,
    title: 'Full transcript assembly',
    description:
      'Chunks are joined into a coherent document. Overlaps handled, context preserved.',
  },
  {
    icon: Download,
    title: 'Export-ready output',
    description:
      'Clean, formatted transcripts ready for your workflow. Export when you need them.',
  },
];

export function SolutionSection({ t }: SolutionSectionProps) {
  const features = [
    {
      icon: Server,
      title: t.solution.feature1Title,
      description: t.solution.feature1Description,
    },
    {
      icon: Layers,
      title: t.solution.feature2Title,
      description: t.solution.feature2Description,
    },
    {
      icon: Users,
      title: t.solution.feature3Title,
      description: t.solution.feature3Description,
    },
    {
      icon: Edit3,
      title: t.solution.feature4Title,
      description: t.solution.feature4Description,
    },
    {
      icon: FileText,
      title: t.solution.feature5Title,
      description: t.solution.feature5Description,
    },
    {
      icon: Download,
      title: t.solution.feature6Title,
      description: t.solution.feature6Description,
    },
  ];
  return (
    <section id="features" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            {t.solution.title}
            <span className="font-serif text-brand-primary">
              {t.solution.titleAccent}
            </span>
            {t.solution.titlePost}
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            {t.solution.description}
          </p>
        </div>
        {/* Main mockup container 
        <div className="mb-4 mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-surface-subtle px-4 py-2 text-sm text-text-secondary">
          <Cpu className="h-4 w-4 text-brand-primary" />
          <span>First release optimized for macOS on Apple Silicon</span>
        </div>
        */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-surface border border-border hover:border-brand-primary/30 transition-all hover:shadow-lg"
            >
              <div className="w-11 h-11 rounded-xl bg-surface-subtle border border-border group-hover:bg-brand-primary/10 group-hover:border-brand-primary/20 flex items-center justify-center mb-4 transition-colors">
                <feature.icon className="w-5 h-5 text-text-muted group-hover:text-brand-primary transition-colors" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
