import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useMediaQuery } from 'react-responsive';

function Github() {
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
