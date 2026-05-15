'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Github } from 'lucide-react';
import type { Translations, Locale } from '@/lib/translations';
import Image from 'next/image';
import logo from '@/public/apple-icon.png';

interface HeaderProps {
  t: Translations;
  locale: Locale;
}

export function Header({ t, locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const basePath = locale === 'es' ? '/es' : '';
  const altLocale = locale === 'es' ? 'en' : 'es';
  const altLocalePath = altLocale === 'es' ? '/es' : '/';
  const altLocaleLabel = altLocale === 'es' ? 'ES' : 'EN';

  const navLinks = [
    { href: `${basePath}#features`, label: t.nav.features },
    { href: `${basePath}#workflow`, label: t.nav.workflow },
    { href: `${basePath}#use-cases`, label: t.nav.useCases },
    { href: `${basePath}#docs`, label: t.nav.docs },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
              <Image src={logo} alt="Macaw Logo" />
            </div>
            <span className="font-serif text-foreground text-3xl tracking-tight">
              Macaw Transcribe
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-subtle"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <Link
              href={altLocalePath}
              className="px-3 py-2 text-sm text-text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-subtle font-medium"
            >
              {altLocaleLabel}
            </Link>
            <Button
              variant="outline"
              size="sm"
              asChild
              className="border-border text-text-secondary hover:bg-surface-subtle"
            >
              <Link
                href="https://github.com/samuelkb"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.nav.viewOnGithub}
              </Link>
            </Button>
            <Button
              size="sm"
              asChild
              className="bg-brand-primary hover:bg-brand-primary-hover text-white"
            >
              <Link href="#waitlist">{t.nav.joinWaitlist}</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-muted hover:text-foreground transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2.5 text-sm text-text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-subtle"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-2.5 text-sm text-text-muted hover:text-foreground transition-colors rounded-lg hover:bg-surface-subtle flex items-center gap-1.5"
              >
                <Github className="w-4 h-4" />
                GitHub
              </Link>
            </nav>
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-border">
              <Button
                variant="outline"
                size="sm"
                asChild
                className="border-border text-text-secondary hover:bg-surface-subtle w-full"
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on GitHub
                </Link>
              </Button>
              <Button
                size="sm"
                asChild
                className="bg-brand-primary hover:bg-brand-primary-hover text-white w-full"
              >
                <Link href="#waitlist">Join the waitlist</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
