'use client';

import {
  Upload,
  Volume2,
  Users,
  Layers,
  FileText,
  CheckCircle,
} from 'lucide-react';

const steps = [
  {
    icon: Upload,
    title: 'Upload audio',
    description:
      'Drop your recording into the app. Supports common audio formats.',
  },
  {
    icon: Volume2,
    title: 'Normalize recording',
    description:
      'Audio is cleaned and prepared for optimal transcription quality.',
  },
  {
    icon: Users,
    title: 'Detect speakers',
    description:
      'Speaker detection identifies who speaks when throughout the recording.',
  },
  {
    icon: Layers,
    title: 'Split into chunks',
    description:
      'Long audio is split into overlapping chunks so each section can be processed and reviewed safely.',
  },
  {
    icon: FileText,
    title: 'Transcribe progressively',
    description:
      'Chunks are transcribed progressively, so useful review can begin before the full recording is finished.',
  },
  {
    icon: CheckCircle,
    title: 'Review, edit, and export',
    description:
      'Verify transcripts, adjust speaker labels, and export your final document.',
  },
];

export function WorkflowSection() {
  return (
    <section id="workflow" className="py-20 lg:py-28 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
            From audio to clean transcript
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed text-pretty">
            A practical workflow designed for long recordings and careful
            review.
          </p>
        </div>

        {/* Workflow pipeline */}
        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-border" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Step card */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon with connector */}
                  <div className="relative z-10 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-surface border-2 border-border shadow-sm flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-brand-primary" />
                    </div>
                    {/* Step number */}
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-primary text-white text-xs font-semibold flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>

                  <h3 className="text-sm font-semibold text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-text-muted leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Arrow - mobile/tablet */}
                {index < steps.length - 1 && index % 2 === 0 && (
                  <div className="hidden sm:block lg:hidden absolute top-8 -right-3 w-6 h-0.5 bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Alternative visual - condensed pipeline 
        <div className="mt-16 p-6 rounded-2xl bg-surface border border-border">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-subtle border border-border">
                  <step.icon className="w-4 h-4 text-brand-primary" />
                  <span className="text-sm font-medium text-foreground">
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <svg
                    className="w-4 h-4 text-text-muted hidden sm:block"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </section>
  );
}
