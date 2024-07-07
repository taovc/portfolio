import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaDocker, FaAngular, FaVuejs } from "react-icons/fa";
import { useSpring, animated } from "react-spring";
import { SiNextdotjs, SiNestjs, SiNuxtdotjs } from "react-icons/si";
import { useInView } from "react-intersection-observer";
import { TbApi } from "react-icons/tb";

const techStacks = [
  { icon: <SiNuxtdotjs />, name: "Nuxt.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaVuejs />, name: "Vue.js" },
  { icon: <DiReact />, name: "React" },
  { icon: <FaAngular />, name: "Angular" },
  { icon: <SiNestjs />, name: "Nest.js" },
  { icon: <DiMongodb />, name: "MongoDB" },
  { icon: <FaDocker />, name: "Docker" },
  { icon: <DiJavascript1 />, name: "JavaScript" },
  { icon: <DiPython />, name: "Python" },
  { icon: <TbApi />, name: "API" },
  { icon: <DiGit />, name: "Git" },
  { icon: <CgCPlusPlus />, name: "C++" },
];

function Techstack() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  const animationProps = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateX(0)" : "translateX(-100%)",
    config: { duration: 1000 },
  });

  return (
    <div ref={ref}>
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

export default Techstack;
