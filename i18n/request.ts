import { ELanguage } from '@/storage/language.store';
import { getRequestConfig } from 'next-intl/server';
import { cookies } from 'next/headers';
 
export default getRequestConfig(async () => {

  const store = await cookies();
  const locale = store.get('locale')?.value as ELanguage || ELanguage.EN;
 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});