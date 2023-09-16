import wechatImg from "../../Assets/WeChat.png";
import { AiFillGithub, AiFillInstagram, AiFillWechat } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { Row, Col } from "react-bootstrap";

export default function ContactIcons() {
  const { t } = useTranslation();

  return (
    <>
      <Row>
        <Col md={12} className="home-about-social">
          <p>
            {t("Feel free to")}{" "}
            <a
              href="mailto:vincentao2002@gmail.com"
              style={{ color: "#18a4cf" }}
            >
              {t("contact")}{" "}
            </a>
            {t("me")}
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="https://github.com/taovc"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                href={wechatImg}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillWechat />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/tao-weijie-880bab1b8/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/tz_vc/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </>
  );
}
