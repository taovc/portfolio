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

  const experiences = [
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695138129/portfolio/3e.png",
      title: t("Project Leader -- E.Design"),
      description: t(
        "Full-stack (Next, Nest, Mongodb, Docker-compose and Cloud (Vps + Nginx)\n\n\
        Build an e-commerce site allowing customers to buy personalized clothing.\
        \nIntegration of Stripe, Google and Cloudinary APIs for a better user experience.\
        \nImplementation of a highly modular backend server respecting REST standards.\n\n\
        Deployment of test and production versions using technologies such as Docker and Docker Compose.\
        Deployed on the OVH server with nginx configured."
      ),
      webLink: "https://www.edesignparis.fr/",
      demoLink: "http://test.e-textile.info/en",
    },
    {
      imgPath: smartx,
      title: t("Fullstack Developer -- Smartx"),
      description: t(
        "Full-stack (Angular, Nodejs, Express, Mongodb, Docker-compose)\n\n\
        Maintaining an administration interface for managing orders, inventory,\
         and generating personalized invoices using technologies such as Angular and Tailwind CSS.\n\n\
         The server is based on a microservices architecture with Hapi,\
          and deployment is automated using to GitLab CI/CD and Docker Compose."
      ),
      webLink: "https://www.smart-x.io/",
      demoLink: "https://e-shop.someflu.org/#/login?returnUrl=%2Fhome",
    },
    {
      imgPath:
        "https://res.cloudinary.com/djjxcsdai/image/upload/h_660,w_1080/v1695208745/portfolio/dataraise_nl08eq.png",
      title: t("DevOps Developer -- Dataraise"),
      description: t("DevOps (docker-compose, Apache Hadoop with Talent Studio)\n\n\
      Containerize a back-end service project for OnPremise deployment. Use docker, docker-compose and dockerHub to reduce installation costs.\n\n\
      Following the first step, approve the service in Cloud mode (AWS)."),
      webLink: "https://www.dataraise.com/",
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
