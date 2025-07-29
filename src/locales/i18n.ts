import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./en/common.json";
import ru from "./ru/common.json";
import uz from "./uz/common.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    uz: { translation: uz },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
