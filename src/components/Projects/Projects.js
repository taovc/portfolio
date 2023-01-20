import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Navbar,
  Nav,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import { BsGithub } from "react-icons/bs";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import zappy from "../../Assets/Projects/zappy.png";
import emotion from "../../Assets/Projects/emotion.png";
import area from "../../Assets/Projects/area.png";
import owl from "../../Assets/Projects/owl.png";
import dataraise from "../../Assets/Projects/dataraise.png";
import suicide from "../../Assets/Projects/suicide.png";
import finance from "../../Assets/Projects/finance.png";

function Experiences() {
  return (
    <Container className="project-section">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <Card className="project-card-view">
            <Card.Img variant="top" src={owl} alt="card-img" />
            <Card.Body style={{ whiteSpace: "pre-line" }}>
              <Card.Title className="purple_text">{"props.title"}</Card.Title>
              <Card.Text className="project-card-text">
                <br></br>
                <text
                  dangerouslySetInnerHTML={{ __html: "props.description" }}
                />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Projects and<strong className="purple_text"> Experiences </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        <Experiences></Experiences>
        <Row className="justify-content-md-center">
          <Col md={8}>
            <ProjectCard
              isBlog={false}
              imgPath={dataraise}
              title="Stage DevOps"
              description="Conteneuriser un projet de service back-end pour un déploiement On Premise
              (Utilisez des méthodes similaires à docker.)
              Par la suite de la premiere étape, homologuer le service en mode Cloud (AWS)."
              demoLink="mailto:vincentao2002@gmail.com"
            />
          </Col>{" "}
        </Row>

        <Row className="justify-content-md-center">
          <Col md={8}>
            <ProjectCard
              imgPath={finance}
              isBlog={false}
              title="FinanceAPI"
              description="A web platform allows for efficient management of orders and invoices.
              It features a user-friendly dashboard,
              a comprehensive list of orders, bank statement integration, various services, reimbursement forms, the ability to create new orders, a linked bank account, a complaint management system, and the option to export data in Excel format. To access the platform, authentication is required.
              To be able to use the platform, you must be authenticated."
              demoLink="https://nuvoleviaggi.netlify.app/"
            />
          </Col>
        </Row>

        <Row>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={owl}
              isBlog={false}
              title="OWL"
              description="OWL makes it possible to monitor the condition of a driver using a connected watch and his telephone.
              If the watch and the telephone detect a state of drowsiness, or that the user is at risk of dozing off.
              His phone will notify him and advise him to stop in order to prevent any risk of accident."
              demoLink="mailto:vincentao2002@gmail.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={area}
              isBlog={false}
              title="AREA"
              description="The goal of this project is to discover, as a whole, the software platform that you have chosen through the creation of a business application.
              you can choice an action and a reaction and create a workflow. For example, you can create a workflow that send you a mail when you receive a mail.
              "
              ghLink="https://github.com/taovc/area"
              demoLink="https://github.com/taovc/area"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="R-Type"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zappy}
              isBlog={false}
              title="Zappy"
              description="The goal of this project is to create a network game. Several teams confront on a tiles map containing resources. The winning team is the one with 6 players who reached maximum elevation.
              We will have a web server, ai client and a graphics processor, the server will accept the client's instructions and send information to the graphics processing application.
              "
              ghLink="https://github.com/taovc"
              demoLink="https://github.com/taovc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Bomberman"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
