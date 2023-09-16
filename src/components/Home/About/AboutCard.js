import { useTranslation } from 'react-i18next';
import Card from 'react-bootstrap/Card';
import { CgGames } from 'react-icons/cg';
import { GiAirplane } from 'react-icons/gi';
import { MdCardTravel } from 'react-icons/md';

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("Hi Everyone, I am")} <span className="purple">{t("Tao Weijie")}</span> {t("from Paris, France.")}
            <br />
            {t("Currently I'm pursuing")} <span className="purple">{t("computer engineer degree")}</span> {t("at Epitech Paris")}{" "} <br />
            {t("and I'm planning to study")} <span className="purple">{t("Computational Intelligence MSC.")}</span>
            <br />
            <br />
            <span>
              {t("I'm fluent in English, French and Chinese, I am very passionate about traveling")}🧳
            </span>
            <br />
            <br />
            {t("During my spare time, some other activities that I love to do!")}
          </p>
          <ul
            style={{
              padding: 0,
            }}
          >
            <li className="about-activity">
              <CgGames className="icons" /> {t("Playing Games")}
            </li>
            <li className="about-activity">
              <GiAirplane className="icons" /> {t("FPV aircraft model")}
            </li>
            <li className="about-activity">
              <MdCardTravel className="icons" /> {t("Travelling")}
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
