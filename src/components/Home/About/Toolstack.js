import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiTrello,
  SiNginx,
  SiIcloud,
  SiAmazonaws,
  SiMicrosoftazure,
} from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

const techStacks = [
  { icon: <SiNginx />, name: "Nginx" },
  { icon: <SiAmazonaws />, name: "AWS" },
  { icon: <SiMicrosoftazure />, name: "Azure" },
  { icon: <SiIcloud />, name: "VPS" },
  { icon: <SiVisualstudiocode />, name: "VS Code" },
  { icon: <SiPostman />, name: "Postman" },
  { icon: <SiTrello />, name: "Trello" },
  { icon: <SiHeroku />, name: "Heroku" },
  { icon: <SiLinux />, name: "Linux" },
];

function Toolstack() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(100%)",
    config: { duration: 1000 },
  });

  return (
    <div ref={ref} className=" overflow-hidden">
      <animated.div style={animationProps}>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {techStacks.map((tech, index) => (
            <Col
              key={index}
              xs={3}
              sm={3}
              md={2}
              className="tech-icons text-center"
            >
              {tech.icon}
              <p style={{ fontSize: "15px" }}>{tech.name}</p>
            </Col>
          ))}
        </Row>
      </animated.div>
    </div>
  );
}

export default Toolstack;
