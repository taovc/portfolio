import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "@/Assets/about.png";
import Toolstack from "./Toolstack";
import { useTranslation } from "react-i18next";
import ContactIcons from "../ContactIcons";
import { useMediaQuery } from "react-responsive";

function About() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              {t("common-about")} <strong className="purple">{t("ME")}</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          {t("Professional")}{" "}
          <strong className="purple">{t("Skillset")} </strong>
        </h1>
        <Techstack />
        <h1 className="project-heading">
          <strong className="purple">{t("Tools")}</strong> {t("I use")}
        </h1>
        <Toolstack />

        {!isMobile ?? <Github />}
        <ContactIcons />
      </Container>
    </Container>
  );
}

export default About;
