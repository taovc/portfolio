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
              {t("MYSELF")}🙋🏻‍♂️
            </h1>
            <p className="home-about-body">
              {t("Programming is an art, like writing poetry")}..... 📜
              <br />
              <br />{" "}
              {t("I'm familiar with the following programming languages")}{" "}
              <i>
                <b className="purple">
                  {" "}
                  <SiCplusplus className="icons"></SiCplusplus> C/C++{" "}
                  <DiJavascript className="icons"></DiJavascript>Javascript{" "}
                  <FaDocker className="icons"></FaDocker>
                  Docker <FaPython className="icons"></FaPython>Python.{" "}
                </b>
              </i>
              <br />
              <br />
              {t("My field of Interest's are")}{" "}
              <i>
                <b className="purple">
                  {t("software development, web development, algorithms")},{" "}
                </b>{" "}
                {t("and also in areas related to")}{" "}
                <b className="purple">{t("Artificial Intelligence")}.</b>
              </i>
              <br />
              <br />
              {t("I also apply my passion for developing products with")}{" "}
              <b className="purple">C++, Golang</b> {t("and")}{" "}
              <i>
                <b className="purple">
                  {t("Modern Javascript Library and Frameworks")}{" "}
                </b>
              </i>
              &nbsp; {t("like")}
              <i>
                <b className="purple"> React/Next.js, Angular.js, Nest.js</b>
              </i>
            </p>
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
