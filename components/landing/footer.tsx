import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/apple-icon.png';
import type { Translations, Locale } from '@/lib/translations';

interface FooterProps {
  t: Translations;
  locale: Locale;
}

export function Footer({ t, locale }: FooterProps) {
  const basePath = locale === 'es' ? '/es' : '';
  const footerLinks = {
    product: [
      { label: t.footer.features, href: `${basePath}#features` },
      { label: t.footer.workflow, href: `${basePath}#workflow` },
      { label: t.footer.useCases, href: `${basePath}#use-cases` },
    ],
    resources: [
      { label: t.footer.github, href: 'https://github.com', external: true },
      { label: t.footer.documentation, href: '#docs' },
      { label: t.footer.roadmap, href: '#roadmap' },
    ],
    project: [
      { label: t.footer.waitlist, href: `${basePath}#waitlist` },
      { label: t.footer.privacy, href: `${basePath}/privacy` },
    ],
  };
  return (
    <footer className="py-16 bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-primary flex items-center justify-center">
                <Image src={logo} alt="Macaw Logo" />
              </div>
              <span className="font-serif text-foreground text-2xl tracking-tight">
                Macaw Transcribe
              </span>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed mb-4 max-w-xs">
              Privacy-first transcription for long conversations. Self-hosted,
              speaker-aware, and designed for careful review.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Product
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.product.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-text-muted hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              Project
            </h4>
            <ul className="space-y-2.5">
              {footerLinks.project.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            Built with ❤️ by{' '}
            <a
              href="https://samuelkb.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-brand-primary transition-colors"
            >
              Samuelkb
            </a>
          </p>
          <p className="text-sm text-text-muted">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
