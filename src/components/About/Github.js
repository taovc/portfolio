import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function Github() {
  const { t } = useTranslation();

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        {t("Days I")} <strong className="purple">{t("Code")}</strong>
      </h1>
      <GitHubCalendar
        username="taovc"
        blockSize={15}
        blockMargin={5}
        color="#ad5bc4"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;
