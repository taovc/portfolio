import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import Tilt from "react-parallax-tilt";
import { FaDocker, FaPython, FaReact, FaAngular } from "react-icons/fa";
import { SiCplusplus, SiNextdotjs, SiNestjs } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function Home2() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col
            xs={"auto"}
            md={8}
            className="text-white pt-100 pb-20 text-center"
          >
            <h1 style={{ fontSize: "2.6em" }}>
              {t("LET ME")} <span className="purple"> {t("INTRODUCE")} </span>{" "}
              {t("MYSELF")}🙋🏻‍♂️{" "}
            </h1>
            <p className="home-about-body">
              {t("common-introduce-body-1")}
              <i>
                <b className="purple"> {t("common-name")}</b>
              </i>
              {t("common-introduce-body-1-1")}

              <i>
                <b className="purple"> {t("common-introduce-body-1-2")}</b>
              </i>

              {t("common-introduce-body-2")}
              <i>
                <b className="purple">
                  {" "}
                  <SiCplusplus className="icons" /> C/C++{" "}
                  <DiJavascript className="icons" /> Javascript{" "}
                  <FaDocker className="icons" /> Docker {t("and")}{" "}
                  <FaPython className="icons" /> Python{" "}
                </b>
              </i>
              <br />
              <br />
              {t("common-introduce-body-2-1")}
              <i>
                <b className="purple">
                  {" "}
                  <FaReact className="icons" /> React.js{" "}
                  <SiNextdotjs className="icons" /> Next.js{" "}
                  <FaAngular className="icons" /> Angular.js{" "}
                  <SiNestjs className="icons" /> Nest.js{" "}
                </b>
              </i>
              <br />
              <br />

              {/* {t("common-introduce-body-3")}
              <i>
                <b className="purple">{t("common-introduce-body-3-1")}</b>
              </i> */}
              {t("common-introduce-body-4")}
            </p>
          </Col>

          {!isMobile && (
            <Col xs={4} className="myAvtar">
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
