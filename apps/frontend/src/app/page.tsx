import { defaultLocale } from '@va/config/i18n';
import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect(`/${defaultLocale}`);
}
