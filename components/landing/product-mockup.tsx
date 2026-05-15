'use client';

import { useState, useEffect } from 'react';
import {
  Play,
  User,
  Check,
  Loader2,
  FileAudio,
  Clock,
  Users,
} from 'lucide-react';
import type { Translations } from '@/lib/translations';

interface ProductMockupProps {
  t: Translations;
}

export function ProductMockup({ t }: ProductMockupProps) {
  const [progress, setProgress] = useState(0);

  const speakers = [
    { id: 1, name: `${t.productMockup.speaker} A`, color: 'bg-brand-primary' },
    {
      id: 2,
      name: `${t.productMockup.speaker} B`,
      color: 'bg-brand-highlight',
    },
  ];

  const chunks = [
    {
      id: 1,
      speaker: 1,
      status: 'completed',
      text: t.productMockup.speakerAText,
    },
    {
      id: 2,
      speaker: 2,
      status: 'completed',
      text: t.productMockup.speakerBText,
    },
    { id: 3, speaker: 1, status: 'reviewing', text: '' },
    { id: 4, speaker: 2, status: 'transcribing', text: '' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-primary/5 to-transparent rounded-3xl blur-3xl -z-10" />

      {/* Main mockup container */}
      <div className="bg-surface rounded-2xl border border-border shadow-xl overflow-hidden">
        {/* Window header */}
        <div className="flex items-center justify-between px-4 py-3 bg-surface-subtle border-b border-border">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-400/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
              <div className="w-3 h-3 rounded-full bg-green-400/80" />
            </div>
            <span className="ml-3 text-sm text-text-muted font-medium">
              Macaw Transcribe
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs text-text-muted">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {t.productMockup.fileDuration}
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5" />2{' '}
              {t.productMockup.speakersDetected}
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] divide-x divide-border">
          {/* Left sidebar - File info & speakers */}
          <div className="p-4 space-y-4 bg-surface">
            {/* File info */}
            <div className="p-3 rounded-xl bg-surface-subtle border border-border">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-brand-primary/10 flex items-center justify-center">
                  <FileAudio className="w-5 h-5 text-brand-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground truncate">
                    {t.productMockup.fileName}
                  </p>
                  <p className="text-xs text-text-muted">
                    {t.productMockup.fileSize} • {t.productMockup.fileDuration}
                  </p>
                </div>
              </div>

              {/* Progress bar */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-text-muted">
                    {t.productMockup.transcribing}
                  </span>
                  <span className="text-brand-primary font-medium">
                    {Math.round(progress)}%
                  </span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full bg-brand-primary rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Speaker timeline */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider">
                {t.productMockup.speakerTimeline}
              </h4>
              <div className="h-12 rounded-lg bg-surface-subtle border border-border p-2 flex items-center gap-0.5">
                {Array.from({ length: 40 }).map((_, i) => {
                  const speakerIndex = i % 7 < 3 ? 0 : 1;
                  const isProcessed = i < Math.floor(progress / 2.5);
                  return (
                    <div
                      key={i}
                      className={`flex-1 h-full rounded-sm transition-colors ${
                        isProcessed ? speakers[speakerIndex].color : 'bg-border'
                      } ${isProcessed ? 'opacity-80' : 'opacity-40'}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Speakers */}
            <div className="space-y-2">
              <h4 className="text-xs font-medium text-text-muted uppercase tracking-wider">
                {t.productMockup.speakersDetected}
              </h4>
              <div className="space-y-2">
                {speakers.map((speaker) => (
                  <div
                    key={speaker.id}
                    className="flex items-center gap-2.5 p-2 rounded-lg bg-surface-subtle border border-border"
                  >
                    <div
                      className={`w-8 h-8 rounded-full ${speaker.color} flex items-center justify-center`}
                    >
                      <User className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-sm text-foreground">
                      {speaker.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel - Transcript chunks */}
          <div className="p-4 bg-surface min-h-[400px]">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-sm font-medium text-foreground">
                {t.productMockup.transcriptReview}
              </h4>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-brand-highlight/10 text-brand-highlight text-xs font-medium">
                  <Check className="w-3 h-3" />2{' '}
                  {t.productMockup.completed.toLowerCase()}
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md bg-brand-accent/10 text-brand-accent text-xs font-medium">
                  <Loader2 className="w-3 h-3 animate-spin" />
                  {t.productMockup.transcribing}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              {chunks.map((chunk) => (
                <div
                  key={chunk.id}
                  className={`p-3 rounded-xl border transition-all ${
                    chunk.status === 'completed'
                      ? 'bg-surface border-border'
                      : chunk.status === 'reviewing'
                        ? 'bg-brand-secondary/5 border-brand-secondary/30'
                        : 'bg-surface-subtle border-border'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                        chunk.speaker === 1
                          ? 'bg-brand-primary'
                          : 'bg-brand-highlight'
                      }`}
                    >
                      <User className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-foreground">
                          {t.productMockup.speaker}{' '}
                          {chunk.speaker === 1 ? 'A' : 'B'}
                        </span>
                        {chunk.status === 'completed' && (
                          <span className="inline-flex items-center gap-1 text-xs text-brand-success">
                            <Check className="w-3 h-3" />
                            {t.productMockup.completed}
                          </span>
                        )}
                        {chunk.status === 'reviewing' && (
                          <span className="inline-flex items-center gap-1 text-xs text-brand-secondary font-medium">
                            <Play className="w-3 h-3" />
                            {t.productMockup.reviewing}
                          </span>
                        )}
                        {chunk.status === 'transcribing' && (
                          <span className="inline-flex items-center gap-1 text-xs text-brand-accent">
                            <Loader2 className="w-3 h-3 animate-spin" />
                            {t.productMockup.transcribing}
                          </span>
                        )}
                      </div>
                      {chunk.text ? (
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {chunk.text}
                        </p>
                      ) : (
                        <div className="flex items-center gap-2">
                          <div className="h-3 bg-border rounded animate-pulse w-3/4" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
