import { Monitor, Code, Settings, GitBranch } from 'lucide-react';

const benefits = [
  {
    icon: Monitor,
    title: 'Run it locally',
    description:
      'Install on your laptop, workstation, or private server. No cloud transcription service required.',
  },
  {
    icon: Code,
    title: 'Inspect the code',
    description:
      'Every line is visible. Understand exactly how your audio is processed.',
  },
  {
    icon: Settings,
    title: 'Own your workflow',
    description:
      "Customize, extend, or integrate with your existing tools. It's your infrastructure.",
  },
  {
    icon: GitBranch,
    title: 'Contribute to the roadmap',
    description:
      'Shape the product through issues, pull requests, and community feedback.',
  },
];

export function OpenSourceSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-highlight/10 border border-brand-highlight/20 text-sm text-brand-highlight font-medium mb-6">
              <GitBranch className="w-4 h-4" />
              Open Source
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
              Built on{' '}
              <span className="font-serif text-brand-primary">
                transparency
              </span>{' '}
              and control
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed mb-8 text-pretty">
              Macaw Transcribe is being built as an open-source, self-hosted
              foundation for people who want control over their transcription
              workflow. No vendor lock-in. No black boxes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-surface-subtle border border-border flex items-center justify-center flex-shrink-0">
                    <benefit.icon className="w-4 h-4 text-brand-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-foreground mb-0.5">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-text-muted leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-brand-highlight/5 rounded-3xl blur-2xl -z-10" />
            <div className="p-6 rounded-2xl bg-surface border border-border">
              {/* Terminal-like display */}
              <div className="rounded-xl bg-[#1C211A] p-4 font-mono text-sm">
                <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-white/50 text-xs ml-2">terminal</span>
                </div>
                <div className="space-y-2 text-white/90">
                  <div>
                    <span className="text-brand-highlight">$</span>{' '}
                    <span className="text-white/70">git clone</span>{' '}
                    <span className="text-brand-primary">
                      https://github.com/samuelkb/MacawTranscribe.git
                    </span>
                  </div>
                  <div className="text-white/50">
                    Cloning into &apos;MacawTranscribe&apos;...
                  </div>
                  <div className="text-brand-success">
                    ✓ Repository cloned successfully
                  </div>
                  <div className="mt-3">
                    <span className="text-brand-highlight">$</span>{' '}
                    <span className="text-white/70">
                      cd macaw-transcribe && docker compose up
                    </span>
                  </div>
                  <div className="mt-3">
                    <span className="text-brand-highlight">$</span>{' '}
                    <span className="text-white/70">
                      python manage.py run_worker_supervisor && python manage.py
                      run_workspace_supervisor
                    </span>
                  </div>
                  <div className="text-brand-success">
                    ✓ Worker supervisor started
                  </div>
                  <div className="text-brand-success">
                    ✓ Workspace supervisor started
                  </div>
                  <div className="mt-3">
                    <span className="text-brand-highlight">$</span>{' '}
                    <span className="text-white/70">
                      gunicorn MacawTranscribe.wsgi.application
                    </span>
                  </div>
                  <div className="text-white/50">Starting services...</div>
                  <div className="text-brand-success">
                    ✓ Macaw Transcribe running on localhost:8000
                  </div>
                </div>
              </div>

              <p className="mt-4 text-sm text-text-muted text-center">
                Local setup is being simplified
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
