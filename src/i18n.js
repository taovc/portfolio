import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeCh from "./lang/Home";
import aboutCh from "./lang/About";

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
    },
  },
};

i18n
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: false,
    fallbackLng: "EN",
    lng: "EN",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;

//{t("me")}
