import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me.jpg";
import wechatImg from "../../Assets/WeChat.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiFillInstagram, AiFillWechat } from "react-icons/ai";
import { FaLinkedinIn, FaDocker, FaPython } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import { DiJavascript } from "react-icons/di";
import { useTranslation } from "react-i18next";

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
              <br /> {t("I am proficient in classics like")}{" "}
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
              <b className="purple">Node.js</b> {t("and")}{" "}
              <i>
                <b className="purple">
                  {t("Modern Javascript Library and Frameworks")}{" "}
                </b>
              </i>
              &nbsp; {t("like")}
              <i>
                <b className="purple"> React.js, Vue.js Angular</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t("FIND ME BY")}</h1>
            <p>
              {t("Feel free to")}{" "}
              <a
                href="mailto:vincentao2002@gmail.com"
                style={{ color: "#18a4cf" }}
              >
                {t("contact")}{" "}
              </a>
              {t("me")}
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/taovc"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href={wechatImg}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillWechat />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/tao-weijie-880bab1b8/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/tz_vc/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
