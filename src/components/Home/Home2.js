import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import { FaDocker, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { isMobile } from "react-device-detect";

function Home2() {
  const { t } = useTranslation();

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LET ME")} <span className="purple"> {t("INTRODUCE")} </span>{" "}
              {t("MYSELF")}🙋🏻‍♂️{" "}
            </h1>
            <p className="home-about-body">{t("common-introduce-body")}</p>
          </Col>

          {!isMobile && (
            <Col md={4} className="myAvtar">
              <Tilt>
                <img src={myImg} className="img-fluid" alt="avatar" />
              </Tilt>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
