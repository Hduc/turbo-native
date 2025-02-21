import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../locales/en.json';
import vi from '../../locales/vi.json';
import zh from '../../locales/zh.json';
import de from '../../locales/de.json';

const resources = {
  en: { translation: en },
  vi: { translation: vi },
  zh: { translation: zh },
  de: { translation: de }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: typeof window !== 'undefined' ? localStorage.getItem('language') || 'vi' : 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
