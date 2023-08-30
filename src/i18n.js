import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "../public/locales/en/translation";
import translationRU from "../public/locales/ru/translation";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "en", // Desteklenmeyen bir dil anahtarında kullanılacak dil
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
