import React from "react";
import Card from "react-bootstrap/Card";
import { CgGames } from "react-icons/cg";
import { GiAirplane } from "react-icons/gi";
import { MdCardTravel } from "react-icons/md";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Tao Weijie </span>
            from France, Paris.
            <br />
            Currently pursuing a{" "}
            <span className="purple">computer engineer degree </span>at Epitech
            Paris, and I'm planning to study{" "}
            <span className="purple">Computational Intelligence MSC</span> at
            Kent University.
            <br />
            <br />
            <span>
              I am trilingual, English, French and Chinese, I am very passionate
              about traveling🧳
            </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul
            style={{
              padding: 0,
            }}
          >
            <li className="about-activity">
              <CgGames className="icons" /> Playing Games
            </li>
            <li className="about-activity">
              <GiAirplane className="icons" /> FPV aircraft model
            </li>
            <li className="about-activity">
              <MdCardTravel className="icons" /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
