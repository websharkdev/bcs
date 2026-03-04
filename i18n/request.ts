import { ELanguage } from '@/storage/language.store';
import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

const SUPPORTED_LOCALES = Object.values(ELanguage);

const detectLocale = async (): Promise<ELanguage> => {
  const store = await cookies();
  const cookieLocale = store.get('locale')?.value as ELanguage;

  if (cookieLocale && SUPPORTED_LOCALES.includes(cookieLocale)) {
    return cookieLocale;
  }

  const headerList = await headers();
  const acceptLanguage = headerList.get('accept-language');

  if (acceptLanguage) {
    const preferredLocales = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim().toLowerCase());

    for (const locale of preferredLocales) {
      if (locale.startsWith('uk') || locale.startsWith('ua')) return ELanguage.UA;
      if (locale.startsWith('ru') || ['be', 'kk', 'ky', 'tg', 'uz'].some(c => locale.startsWith(c))) return ELanguage.RU;
      if (locale.startsWith('nl')) return ELanguage.NL;
      if (locale.startsWith('fr')) return ELanguage.FR;
      if (locale.startsWith('en')) return ELanguage.EN;
    }
  }

  return ELanguage.EN;
};

export default getRequestConfig(async () => {
  const locale = await detectLocale();

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});