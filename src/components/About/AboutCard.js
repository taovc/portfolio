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
            Hi Everyone, I am <span className="bluesky">Tao Weijie </span>
            from <span className="bluesky"> France, Paris.</span>
            <br />
            Currently pursuing a{" "}
            <span className="bluesky">computer engineer degree </span>at Epitech
            Paris, and I'm planning to study{" "}
            <span className="bluesky">Computational Intelligence MSC</span> at
            Kent University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
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

          <p style={{ color: "#a588c0" }}>
            "If A is a success in life, then A = x + y + z.<br></br> Work is x,
            y is play, and z is keeping your mouth shut."{" "}
          </p>
          <footer className="purple_text">--Albert Einstein</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
