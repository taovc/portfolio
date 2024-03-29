import { useTranslation } from "react-i18next";
import Card from "react-bootstrap/Card";

function AboutCard() {
  const { t } = useTranslation();

  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "left" }}>
            {t("common-service-body-1")}
            <i>
              <b className="purple">
                {" "}
                {t("common-service-body-1-1")}
              </b>
            </i>{" "}
            <br />
            <br />
            {t("common-service-body-2")}
            <i>
              <b className="purple">
                {" "}
                {t("common-service-body-2-1")}
              </b>
            </i>{" "}
            {t("common-service-body-2-2")}
            <br />
            <br />
            {t("common-service-body-3")}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
