import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import owl from "@/Assets/Projects/owl.png";
import smartx from "@/Assets/Projects/smartx.png";
import finance from "@/Assets/Projects/finance.png";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0px)" : "translateX(-50px)",
    config: { duration: 1000 },
  });
  const animationProps2 = useSpring({
    opacity: inView2 ? 1 : 0,
    transform: inView2 ? "translateX(0px)" : "translateX(50px)",
    config: { duration: 1000 },
  });

  const experiences = [
    {
      imgPath:
        "https://res.cloudinary.com/dttnlrqf0/image/upload/v1720365358/me/talentYou.png",
      title: t("project-talentYou-title"),
      description: t("project-talentYou-description"),
      webLink: "https://talentyou.ai/",
      demoLink: "",
    },
    {
      imgPath:
        "https://res.cloudinary.com/dttnlrqf0/image/upload/v1720363943/me/dataEr.png",
      title: t("project-dataEr-title"),
      description: t("project-dataEr-description"),
      webLink: "https://yourdataer.com/",
      demoLink: "",
    },
    {
      imgPath:
        "https://res.cloudinary.com/dttnlrqf0/image/upload/v1720365171/me/ztw.png",
      title: t("project-ztw-title"),
      description: t("project-ztw-description"),
      webLink: "https://www.ztw666.com/index/index/new_index.html",
      demoLink: "",
    },
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695138129/portfolio/3e.png",
      title: t("project-1-h"),
      description: t("project-1"),
      webLink: "https://www.edesignparis.fr/",
      demoLink: "http://test.e-textile.info/en",
    },
    {
      imgPath: smartx,
      title: t("project-2-h"),
      description: t("project-2"),
      webLink: "https://www.smart-x.io/",
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
    },
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695208745/portfolio/dataraise_nl08eq.png",
      title: t("project-3-h"),
      description: t("project-3"),
      webLink: "https://www.dataraise.com/",
    },
  ];
  const projects = [
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695213143/portfolio/evogue_hfbdac.png",
      title: t("project-4-h"),
      description: t("project-4"),
      webLink: "https://www.evogue.fr/",
    },
    {
      imgPath: finance,
      title: t("project-5-h"),
      description: t("project-5"),
      demoLink: "https://nuvoleviaggi.netlify.app/",
    },
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695292832/area_d6mi5m.png",
      title: t("project-6-h"),
      description: t("project-6"),
      ghLink: "https://github.com/taovc/area",
    },
    {
      imgPath: owl,
      title: t("project-7-h"),
      description: t("project-7"),
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("Projects")} {t("and")}{" "}
          <strong className="purple_text"> {t("Experiences")} </strong>
        </h1>
        <p style={{ color: "white" }}>{t("project-subtitle")}</p>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="project-heading">
          <strong className="purple_text"> {t("Experiences")} </strong>
        </h2>
        <animated.div style={animationProps} ref={ref}>
          <Row className="project-card">
            {experiences.map((project, index) => (
              <Col key={index} md={6} lg={4}
                style={{ marginBottom: "36px" }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  webLink={project.webLink}
                />
              </Col>
            ))}
          </Row>
        </animated.div>
        <h2 className="project-heading">
          <strong className="blue_text"> {t("Projects")} </strong>
        </h2>
        <animated.div style={animationProps2} ref={ref2}>
          <Row className="project-card">
            {projects.map((project, index) => (
              <Col key={index} md={6} lg={3}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  webLink={project.webLink}
                  ghLink={project.ghLink}
                />
              </Col>
            ))}
          </Row>
        </animated.div>
      </Container>
    </Container>
  );
}

export default Projects;
