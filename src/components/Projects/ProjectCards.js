import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite, CgMail } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { RiFilePpt2Line} from "react-icons/ri";

function ProjectCards(props) {
  const buttonInfo = [
    {
      icon: <CgWebsite />,
      label: "Web Site",
      link: props.webLink,
      isHidden: !props.webLink,
    },
    {
      icon: <BsGithub />,
      label: "GitHub",
      link: props.ghLink,
      isHidden: !props.ghLink,
    },
    {
      icon: <CgMail />,
      label: "Contact",
      link: "mailto:vincentao2002@gmail.com",
      isHidden: !props.isMail,
    },
    {
      icon: <RiFilePpt2Line />,
      label: "Demo",
      link: props.demoLink,
      isHidden: !props.demoLink,
    },
  ];

  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body style={{ paddingBottom: "50px", position: "relative" }}>
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
          {buttonInfo.map(
            (button, index) =>
              !button.isHidden && (
                <Button
                  key={index}
                  variant="primary"
                  href={button.link}
                  target="_blank"
                  style={{ marginLeft: "10px" }}
                >
                  {button.icon} &nbsp;
                  {button.label}
                </Button>
              )
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
