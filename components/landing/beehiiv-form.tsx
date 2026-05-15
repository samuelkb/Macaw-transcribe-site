'use client';

import { useEffect, useRef } from 'react';

type BeehiivEmbedProps = {
  formId: string;
  className?: string;
};

export function BeehiivForm({ formId, className }: BeehiivEmbedProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.innerHTML = '';

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
    script.setAttribute('data-beehiiv-form', formId);

    container.appendChild(script);

    return () => {
      container.innerHTML = '';
    };
  }, [formId]);

  return <div ref={containerRef} className={className} />;
}
