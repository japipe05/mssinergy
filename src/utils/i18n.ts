"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector"; // ✅ importar

import spanish from "./languages/es.json";
import english from "./languages/en.json";
import portuguese from "./languages/pt.json";
import french from "./languages/fr.json";
import arabic from "./languages/ar.json";
import chinese from "./languages/ch.json";

const resources = {
  es: { translation: spanish },
  en: { translation: english },
  pt: { translation: portuguese },
  fr: { translation: french },
  ar: { translation: arabic },
  ch: { translation: chinese },
};

i18n
  .use(LanguageDetector) // ✅ para detectar y persistir idioma
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "es", // ✅ si no detecta, usa español
    detection: {
      order: ["localStorage", "navigator", "htmlTag"],
      caches: ["localStorage"],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
