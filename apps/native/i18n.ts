import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Localization from 'expo-localization';
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

const getStoredLanguage = async () => {
  try {
    const storedLang = await AsyncStorage.getItem('language');
    return storedLang || 'vi';
  } catch (error) {
    console.log('Lỗi khi lấy ngôn ngữ:', error);
    return 'vi';
  }
};

getStoredLanguage().then((language) => {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: language || (Localization.locale.startsWith('vi') ? 'vi' : 'en'),
      fallbackLng: 'vi',
      interpolation: {
        escapeValue: false
      }
    });
});

export default i18n;
