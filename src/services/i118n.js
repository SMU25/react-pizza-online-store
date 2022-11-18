import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { EN } from "constants/translate/en";
import { UA } from "constants/translate/ua";

const locales = ["en", "ua"];

const resources = {
  en: {
    translation: EN,
  },
  ua: {
    translation: UA,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    locales,
    resources,
    fallbackLng: "en",
    debug: true, //console.log
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
