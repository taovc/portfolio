import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaDocker, FaAngular } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={3} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <TbApi />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <FaDocker />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={3} md={2} className="tech-icons">
        <FaAngular />
      </Col>
    </Row>
  );
}

export default Techstack;
