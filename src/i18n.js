import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import homeCh from "./lang/Home";

const resources = {
  ch: {
    translation: {
      ...homeCh,

      ME: "我",
      Home: "主页",
      About: "关于",
      Projects: "项目",
      CV: "简历",
      Professional: "专业",
      Skillset: "技能",
      Tools: "常用",
      "I use": "工具",
      "Days I": "日常",
      Code: "编程",
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
    fallbackLng: "en",
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;

//{t("me")}
