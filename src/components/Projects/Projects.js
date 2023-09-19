import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zappy from "@/Assets/Projects/zappy.png";
import rtype from "@/Assets/Projects/rtype.jpg";
import area from "@/Assets/Projects/area.png";
import owl from "@/Assets/Projects/owl.png";
import dataraise from "@/Assets/Projects/dataraise.png";
import smartx from "@/Assets/Projects/smartx.png";
import finance from "@/Assets/Projects/finance.png";
import { useTranslation } from "react-i18next";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

function Projects() {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(50px)",
  });
  const experiences = [
    {
      imgPath: "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695138129/portfolio/3e.png",
      title: t("Project Leader -- E.Design"),
      description: t("Full-stack (Next, Nest, Mongodb, Docker-compose et OVH)\n\n"),
      webLink: "https://www.edesignparis.fr/",
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
    },
    {
      imgPath: smartx,
      title: t("Fullstack Developer -- Smartx"),
      description: t("Maintain an enterprise order management system..."),
      webLink: "https://www.smart-x.io/",
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
    },
  ];
  const projects = [
    {
      imgPath: smartx,
      title: t("Fullstack Developer -- Smartx"),
      description: t("Maintain an enterprise order management system..."),
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
      webLink: "https://www.smart-x.io/",
    },
  ];

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t("Projects and")}
          <strong className="purple_text"> {t("Experiences")} </strong>
        </h1>
        <p style={{ color: "white" }}>
          {t("My work experience and personal projects are listed below.")}
        </p>
        <br></br>
        <br></br>
        <br></br>
        <h2 className="project-heading">
          <strong className="purple_text"> {t("Experiences")} </strong>
        </h2>
        <Row className="project-card">
          {experiences.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <animated.div
                ref={ref}
                style={{ ...animationProps, marginBottom: "20px" }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  webLink={project.webLink}
                />
              </animated.div>
            </Col>
          ))}
        </Row>
        <h2 className="project-heading">
          <strong className="blue_text"> {t("Projects")} </strong>
        </h2>
        <Row className="project-card">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={3}>
              <animated.div
                ref={ref}
                style={{ ...animationProps, marginBottom: "20px" }}
              >
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  demoLink={project.demoLink}
                  webLink={project.webLink}
                />
              </animated.div>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
