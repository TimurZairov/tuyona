import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import ru from '../../locales/ru.json';
import uz from '../../locales/uz.json';

export const languageResources = {
  ru: {translation: ru},
  uz: {translation: uz},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  debug: true,
  interpolation: {escapeValue: false},
  lng: 'ru',
  fallbackLng: 'ru',
  resources: languageResources,
});

export default i18next;
