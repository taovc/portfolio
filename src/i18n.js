import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n
  // 注入 react-i18next 实例
  .use(initReactI18next)
  // 初始化 i18next
  // 配置参数的文档: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      ch: {
        translation: {
          Hello: "你好",
          "I'M": "我是",
          "Tao weijie": "陶伟杰",
          "LET ME": "让我",
          INTRODUCE: "介绍一下",
          MYSELF: "自己",
          "Programming is an art, like writing poetry":
            "编程是一门艺术，就像写诗一样",
          "I am proficient in classics like": "我熟悉以下经典语言",
          "My field of Interest's are": "我的兴趣领域是",
          "software development, web development, algorithms":
            "软件开发, Web开发, 算法",
          "and also in areas related to": "还有",
          "Artificial Intelligence": "人工智能",
          "I also apply my passion for developing products with":
            "我也热衷于使用以下技术开发产品：",
          and: "和",
          "Modern Javascript Library and Frameworks":
            "Javascript主流的库和框架",
          like: "比如",
          "FIND ME BY": "在这里找到我",
          "Feel free to": "随时",
          contact: "联系",
          me: "我",
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
      en: {
        translation: {
          Hello: "Hello",
          "I'M": "I'm",
          "Tao weijie": "Tao Weijie",
          "LET ME": "Let me",
          INTRODUCE: "introduce",
          MYSELF: "myself",
          "Programming is an art, like writing poetry":
            "Programming is an art, like writing poetry",
          "I am proficient in classics like":
            "I am proficient in classics like",
          "My field of Interest's are": "My field of Interest's are",
          "software development, web development, algorithms":
            "software development, web development, algorithms",
          "and also in areas related to": "and also in areas related to",
          "Artificial Intelligence": "Artificial Intelligence",
          "I also apply my passion for developing products with":
            "I also apply my passion for developing products with",
          and: "and",
          "Modern Javascript Library and Frameworks":
            "Modern Javascript Library and Frameworks",
          like: "like",
          "FIND ME BY": "FIND ME BY",
          "Feel free to": "Feel free to",
          contact: "contact",
          me: "me",
          Home: "Home",
          About: "About",
          Projects: "Projects",
          CV: "CV",
        },
      },
    },
  });

export default i18n;

//{t("me")}
