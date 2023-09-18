import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from 'react-responsive';

function Github() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <GitHubCalendar
        username="taovc"
        blockSize={15}
        blockMargin={5}
        color="#ad5bc4"
        fontSize={isMobile ? 6 : 16}
      />
    </Row>
  );
}

export default Github;
