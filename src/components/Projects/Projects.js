import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zappy from "../../Assets/Projects/zappy.png";
import rtype from "../../Assets/Projects/rtype.jpg";
import area from "../../Assets/Projects/area.png";
import owl from "../../Assets/Projects/owl.png";
import dataraise from "../../Assets/Projects/dataraise.png";
import smartx from "../../Assets/Projects/smartx.png";
import finance from "../../Assets/Projects/finance.png";
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation();

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
        <Row className="project-card">
          <Col md={6} lg={4}>
            <ProjectCard
              imgPath={smartx}
              isBlog={false}
              title={t("Fullstack Developer -- Smartx")}
              description={t(
                "Maintain an enterprise order management system written in Angular Node.js and Mongodb.\n\nLeveraging my expertise in Angular and Mongodb, I successfully implemented a system to track the flow of orders, shipping and receiving information, and the status of products in the warehouse.\n\n My contributions led to an efficient and streamlined order management process, which significantly improved productivity and customer satisfaction.\n\nBy ensuring that authentication is required to access the platform, we maintained the highest level of security for our clients' data."
              )}
              demoLink="https://e-shop.someflu.org/#/login?returnUrl=%2Fhome"
              webLink="https://www.smart-x.io/"
            />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title={t("Freelance Project -- FinanceAPI")}
              description={t(
                "It's a web platform built with React, Node.js, and MongoDB, designed to efficiently manage orders and invoices.\n\nThe user-friendly dashboard provides a comprehensive list of orders, along with integration of bank statements and reimbursement forms.\n\nThe platform also includes a Fund Management System and the ability to create new orders and data can be easily exported in Excel format for convenience.\n\nAuthentication is required to access the platform, ensuring security and privacy for all users."
              )}
              demoLink="https://nuvoleviaggi.netlify.app/"
              isMail={true}
            />
          </Col>
          <Col md={6} lg={4}>
            <ProjectCard
              isBlog={false}
              imgPath={dataraise}
              title={t("DevOps Developer -- DataRaise")}
              description={t(
                "My responsibility was to containerize a Talend Studio back service using Docker and Docker-compose for deployment.\n\nThrough my expertise in containerization and deployment, I successfully implemented this method, resulting in a significant improvement in the project's efficiency and scalability.\n\nContainerization allowed the project to be easily deployed and managed, while Docker-compose enabled the management of multiple containers as a single application.\n\nThis approach not only made the project more efficient but also reduced the time and effort required for deployment and maintenance."
              )}
              webLink="https://dataraise.com/"
            />
          </Col>{" "}
        </Row>
        <Row className="project-card" >
          <Col md={6} lg={3} >
            <ProjectCard
              imgPath={owl}
              isMail={true}
              title="OWL"
              description={t(
                "OWL is a mobile application that monitors driver condition through a connected watch and phone.\n\nThe watch and phone can detect signs of drowsiness or the risk of dozing off.\n\nIf such signs are detected, the driver's phone will alert them and advise them to stop to prevent any accidents."
              )}
            />
          </Col>

          <Col md={6} lg={3}>
            <ProjectCard
              imgPath={area}
              isBlog={false}
              title="AREA"
              description={t(
                "The goal of this project is to discover the chosen software platform by creating a business application that utilizes its features.\n\nThis involves selecting an action and a reaction to create a workflow.\n\nFor instance, you can set up a workflow that sends you an email when you receive one."
              )}
              ghLink="https://github.com/taovc/area"
            />
          </Col>

          <Col md={6} lg={3}>
            <ProjectCard
              imgPath={rtype}
              isBlog={false}
              title="R-Type"
              description={t(
                "Rewrite the R-Type game using the SFML library, network programming, and multithreading in C++.\n\nOur game includes a graphical interface, a network protocol, a client, and a server.\n\nThe game architecture is based on the ECS (Entity Component System) architecture."
              )}
            />
          </Col>

          <Col md={6} lg={3}>
            <ProjectCard
              imgPath={zappy}
              isBlog={false}
              title="Zappy"
              description={t(
                "C++ game project, featuring advanced AI technology and dynamic display.\n\nWith our AI system, players can expect challenging gameplay and unpredictable outcomes.\n\nOur server ensures seamless communication between players for a truly interactive gaming experience."
              )}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
