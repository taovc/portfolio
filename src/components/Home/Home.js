import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import About from "./About/About";
import Projects from "../Projects/Projects";
import { useTranslation } from "react-i18next";
import { useMediaQuery } from "react-responsive";

function Home() {
  const { t } = useTranslation();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                {t("common-hello")}{" "}
                <span className="wave" role="img" aria-labelledby="wave"></span>
              </h1>

              <h1 className="heading-name">
                {t("common-i-am")}
                <strong className="main-name"> {t("Tao weijie")}</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              {!isMobile ? (
                <video autoPlay loop muted className="img-fluid">
                  <source
                    src={
                      "https://res.cloudinary.com/djjxcsdai/video/upload/c_fill,h_469,w_488,x_0,y_50/v1695069697/portfolio/home_fchuum.mp4"
                    }
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={
                    "https://res.cloudinary.com/djjxcsdai/image/upload/v1695223050/portfolio/home_edtrbk.png"
                  }
                  alt="home pic"
                  className="img-fluid"
                />
              )}
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects />
      <About />
    </section>
  );
}

export default Home;
