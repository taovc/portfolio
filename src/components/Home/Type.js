import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next";

function Type() {
  const { i18n } = useTranslation();

  const strings = {
    en: [
      "Developer",
      "Freelancer",
      "Full Stack Developer",
      "Project Lead",
      "DevOps Engineer",
    ],
    ch: [
      "计算机工程师",
      "自由职业者",
      "项目领导",
      "全栈工程师",
      "DevOps工程师",
    ],
  };

  return (
    <Typewriter
      options={{
        strings: strings[i18n.language],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
