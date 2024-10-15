import { useTranslation } from "react-i18next";
import gksImg from "../../assets/jlpt.png";

export const JLPT = () => {
  const { t } = useTranslation()
  return (
    <section className="gks">
      <div className="container">
        <div className="gks-content">
          <div className="title">{t("jlpt.title")}</div>
          <div className="gks-menu d-flex justify-between items-center">
            <div className="menu-left">
              <img src={gksImg} alt="photo" />
            </div>
            <div className="menu-right">
              <p>{t("jlpt.description")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
