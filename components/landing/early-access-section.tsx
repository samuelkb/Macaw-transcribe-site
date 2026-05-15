'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight, Github, Loader2, Check } from 'lucide-react';
import { BeehiivForm } from './beehiiv-form';

export function EarlyAccessSection() {
  return (
    <section id="waitlist" className="py-20 lg:py-28 bg-surface-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-sm text-brand-accent font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse" />
              In active development
            </div>

            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground tracking-tight mb-4 text-balance">
              Be part of{' '}
              <span className="font-serif text-brand-primary">building</span> it
            </h2>
            <p className="text-lg text-text-secondary leading-relaxed text-pretty">
              Macaw Transcribe is currently being built. Join the waitlist to
              follow progress, test early releases, and help shape the product.
            </p>
          </div>

          {/* Waitlist form */}
          <div className="p-8 rounded-2xl bg-surface border border-border">
            <BeehiivForm
              formId="93e09f43-44ad-453b-a9b0-6de9e1a0dab0"
              className="w-full"
            />
            <p className="text-xs text-text-muted text-center sm:text-left p-4">
              No spam. Occasional updates on development progress and early
              access.
            </p>

            <div className="mt-6 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-sm text-text-muted">
                Or follow development directly
              </p>
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-border text-text-secondary hover:bg-surface-subtle"
              >
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Follow on GitHub
                </a>
              </Button>
            </div>
          </div>

          {/* What to expect */}
          <div className="mt-8 grid sm:grid-cols-3 gap-4">
            {[
              {
                label: 'Progress updates',
                description: 'Regular development logs',
              },
              {
                label: 'Early access',
                description: 'Test before public release',
              },
              {
                label: 'Direct input',
                description: 'Shape features and priorities',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-surface border border-border text-center"
              >
                <p className="text-sm font-medium text-foreground mb-1">
                  {item.label}
                </p>
                <p className="text-xs text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
