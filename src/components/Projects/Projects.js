import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import area from "@/Assets/Projects/area.png";
import owl from "@/Assets/Projects/owl.png";
import smartx from "@/Assets/Projects/smartx.png";
import finance from "@/Assets/Projects/finance.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

  const experiences = [
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695138129/portfolio/3e.png",
      title: t("Project Leader -- E.Design"),
      description: t("project-1"),
      webLink: "https://www.edesignparis.fr/",
      demoLink: "http://test.e-textile.info/en",
    },
    {
      imgPath: smartx,
      title: t("Fullstack Developer -- Smartx"),
      description: t("project-2"),
      webLink: "https://www.smart-x.io/",
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
    },
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695208745/portfolio/dataraise_nl08eq.png",
      title: t("DevOps Developer -- Dataraise"),
      description: t("project-3"),
      webLink: "https://www.dataraise.com/",
    },
  ];
  const projects = [
    {
      imgPath: "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695213143/portfolio/evogue_hfbdac.png",
      title: t("Programming teacher -- Evogue"),
      description: t("project-4"),
      webLink: "https://www.evogue.fr/",
    },
    {
      imgPath: finance,
      title: t("Freelance Project -- FinanceAPI"),
      description: t(
        "Full-stack (React, Node, Mongodb, Docker-compose and netlify)\n\n\
        It's an ERP system that supports invoice management and ordering. \n\
        You can easily import/export excel files to process customer information.\n\n\
        This system allows you to process customer data more easily and efficiently."
      ),
      demoLink: "https://nuvoleviaggi.netlify.app/",
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
        <h2 className="project-heading">
          <strong className="blue_text"> {t("Projects")} </strong>
        </h2>
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
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
