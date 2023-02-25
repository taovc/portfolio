import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body
        style={{
          paddingBottom: "50px",
          position: "relative",
        }}
      >
        <Card.Title className="purple_text">{props.title}</Card.Title>
        <br></br>
        <Card.Text className="project-card-text">{props.description}</Card.Text>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "87%",
            position: "absolute",
            bottom: "15px",
          }}
        >
          <Button
            variant="primary"
            hidden={!props.ghLink}
            href={props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          <Button
            variant="primary"
            hidden={!props.isMail}
            target="_blank"
            href="mailto:vincentao2002@gmail.com"
            style={{ marginLeft: "10px" }}
          >
            <CgMail /> &nbsp;
            {"Contact"}
          </Button>

          <Button
            variant="primary"
            href={props.demoLink}
            hidden={!props.demoLink && !props.isBlog}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>

          <Button
            variant="primary"
            href={props.webLink}
            hidden={!props.webLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Web Site"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
