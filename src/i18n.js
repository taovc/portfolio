import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeCh from "./lang/Home";
import aboutCh from "./lang/About";
import projectCh from "./lang/Project";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

const resources = {
  CH: {
    translation: {
      ...homeCh,

      About: "关于",
      ME: "我",
      Home: "主页",
      Projects: "项目",
      CV: "简历",

      ...aboutCh,

      ...projectCh,
    },
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    // resources,
  });

export default i18n;

//{t("me")}
