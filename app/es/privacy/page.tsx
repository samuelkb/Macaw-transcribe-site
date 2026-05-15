import { Metadata } from 'next';
import { getTranslations } from '@/lib/translations';
import { PrivacyPage } from '@/components/landing/privacy-page';

export const metadata: Metadata = {
  title: 'Privacidad | Macaw Transcribe',
  description:
    'Información de privacidad para la página de Macaw Transcribe y el proyecto.',
};

export default function PrivacyPageES() {
  const t = getTranslations('es');

  return <PrivacyPage t={t} locale="es" />;
}
