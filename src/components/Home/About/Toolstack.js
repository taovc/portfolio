import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLinux,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiTrello,
} from "react-icons/si";
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

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
          <Col xs={3} md={2} className="tech-icons">
            <SiLinux />
          </Col>
          <Col xs={3} md={2} className="tech-icons">
            <SiVisualstudiocode />
          </Col>
          <Col xs={3} md={2} className="tech-icons">
            <SiPostman />
          </Col>
          <Col xs={3} md={2} className="tech-icons">
            <SiTrello />
          </Col>
          <Col xs={3} md={2} className="tech-icons">
            <SiHeroku />
          </Col>
        </Row>
      </animated.div>
    </div>
  );
}

export default Toolstack;
