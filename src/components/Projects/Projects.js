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

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects and<strong className="purple_text"> Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          My work experience and personal projects are listed below.
        </p>
        <br></br>
        <br></br>
        <br></br>
        <Row className="project-card">
          <Col md={4}>
            <ProjectCard
              imgPath={smartx}
              isBlog={false}
              title="Intership Fullstack -- Smartx"
              description="Maintain an enterprise order management system written in Angular and Mongodb.
              The system can track the flow of orders, shipping and receiving information, and the status of the products in the warehouse.
              To access the platform, authentication is required."
              demoLink="https://e-shop.someflu.org/#/login?returnUrl=%2Fhome"
              webLink="https://www.smart-x.io/"
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="Freelance Project -- FinanceAPI"
              description="A web platform allows for efficient management of orders and invoices.
              It features a user-friendly dashboard,
              a comprehensive list of orders, bank statement integration, various services, reimbursement forms,
              the ability to create new orders, a linked bank account, a complaint management system, and the option to export
              data in Excel format.
              To be able to use the platform, you must be authenticated."
              demoLink="https://nuvoleviaggi.netlify.app/"
              isMail={true}
            />
          </Col>
          <Col md={4}>
            <ProjectCard
              isBlog={false}
              imgPath={dataraise}
              title="Intership DevOps -- DataRaise"
              description="Conteneuriser un projet de service back-end pour un déploiement On Premise
              (Utilisez des méthodes similaires à docker.)
              Par la suite de la premiere étape, homologuer le service en mode Cloud (AWS).
              technology stack:
              Docker, Docker-compose, Talend Open Studio. 
              "
              webLink="https://dataraise.com/"
            />
          </Col>{" "}
        </Row>

        <Row>
          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={owl}
              isMail={true}
              title="OWL"
              description="OWL makes it possible to monitor the condition of a driver using a connected watch and his telephone.
              If the watch and the telephone detect a state of drowsiness, or that the user is at risk of dozing off.
              His phone will notify him and advise him to stop in order to prevent any risk of accident."
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={area}
              isBlog={false}
              title="AREA"
              description="The goal of this project is to discover, as a whole, the software platform that you have chosen through the creation of a business application.
              you can choice an action and a reaction and create a workflow. For example, you can create a workflow that send you a mail when you receive a mail.
              "
              ghLink="https://github.com/taovc/area"
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={rtype}
              isBlog={false}
              title="R-Type"
              description="
              rewrite the R-Type game in C++ with the SFML library, network programming and multithreading.
              Our game has a graphical interface, a network protocol, a client and a server.
              the game architecture is the ECS (Entity Component System) architecture.
              "
            />
          </Col>

          <Col md={3} className="project-card">
            <ProjectCard
              imgPath={zappy}
              isBlog={false}
              title="Zappy"
              description="The goal of this project is to create a network game. Several teams confront on a tiles map containing resources. The winning team is the one with 6 players who reached maximum elevation.
              We will have a web server, ai client and a graphics processor, the server will accept the client's instructions and send information to the graphics processing application.
              "
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
