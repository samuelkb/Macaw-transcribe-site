import { Check, X } from 'lucide-react';

const comparisons = [
  {
    feature: 'Designed for long-form audio',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Built around review, not just output',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Speaker-aware from the start',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Self-hosted and transparent',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Progressive chunk-based workflow',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Review while processing',
    macaw: true,
    generic: false,
  },
  {
    feature: 'Chunk-level correction and retries',
    macaw: true,
    generic: false,
  },
];

export function DifferentiatorsSection() {
  return (
    <section className="py-20 lg:py-28 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            Not just transcription. A{' '}
            <span className="font-serif text-brand-primary">review</span>{' '}
            workspace.
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            Most transcription tools focus on output. Macaw Transcribe focuses
            on the entire workflow.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl bg-surface border border-border overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] gap-4 p-4 bg-surface-subtle border-b border-border">
              <div className="text-sm font-medium text-text-muted">Feature</div>
              <div className="text-sm font-medium text-center text-foreground">
                Macaw
              </div>
              <div className="text-sm font-medium text-center text-text-muted">
                Output-first tools
              </div>
            </div>

            {/* Rows */}
            {comparisons.map((comparison, index) => (
              <div
                key={index}
                className={`grid grid-cols-[1fr_100px_100px] sm:grid-cols-[1fr_140px_140px] gap-4 p-4 ${
                  index !== comparisons.length - 1
                    ? 'border-b border-border'
                    : ''
                }`}
              >
                <div className="text-sm text-foreground">
                  {comparison.feature}
                </div>
                <div className="flex justify-center">
                  {comparison.macaw ? (
                    <div className="w-6 h-6 rounded-full bg-brand-success/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-brand-success" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-surface-subtle flex items-center justify-center">
                      <X className="w-4 h-4 text-text-muted" />
                    </div>
                  )}
                </div>
                <div className="flex justify-center">
                  {comparison.generic ? (
                    <div className="w-6 h-6 rounded-full bg-brand-success/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-brand-success" />
                    </div>
                  ) : (
                    <div className="w-6 h-6 rounded-full bg-surface-subtle flex items-center justify-center">
                      <X className="w-4 h-4 text-text-muted" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Key differentiator callout */}
          <div className="mt-8 p-6 rounded-2xl bg-brand-primary/5 border border-brand-primary/20">
            <p className="text-center text-foreground leading-relaxed">
              <span className="font-semibold">The key difference:</span> Macaw
              Transcribe is designed for the work that happens after
              transcription starts: reviewing, correcting, retrying difficult
              sections, and exporting a clean final transcript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
