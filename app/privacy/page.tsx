import { Metadata } from 'next';
import { getTranslations } from '@/lib/translations';
import { PrivacyPage } from '@/components/landing/privacy-page';

export const metadata: Metadata = {
  title: 'Privacy | Macaw Transcribe',
  description:
    'Privacy information for Macaw Transcribe landing page and project.',
};

export default function PrivacyPageEN() {
  const t = getTranslations('en');

  return <PrivacyPage t={t} locale="en" />;
}
