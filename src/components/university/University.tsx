import Marquee from "react-fast-marquee";
import { HeroButton } from "../button/heroButton";
import sokaUniversity from "../../assets/soka-university.jpg";
import tokioInternational from "../../assets/tokio-international.jpg";
import japanEconomic from "../../assets/japan-economic.png";
import pacificUniversity from "../../assets/pacific-university.jpg";
import wasedaUniversity from "../../assets/waseda-university.jpg";
import nagoyaUniversity from "../../assets/nagoya-university.jpg";
import prorowSchool from "../../assets/prorow-school.jpg";
import kurashikiSchool from "../../assets/kurashiki-school.jpg";
import hisaeSchool from "../../assets/hisae-school.jpg";
import hotsumaSchool from "../../assets/hotsuma-school.jpg";
import osakoSchool from "../../assets/osaka-school.jpg";
import tbsSchool from "../../assets/tbs-school.jpg";
import tccSchool from "../../assets/tcc-school.jpg";
import { FC } from "react";
import { useTranslation } from "react-i18next";

interface UniversityProps {
  setOpen: (item: boolean) => void;
}

export const University: FC<UniversityProps> = ({ setOpen }) => {
  const { t } = useTranslation();
  return (
    <section className="university">
      <div className="container">
        <div className="university-inner">
          <div className="university-content ">
            <div className="title ">{t("university.title")}</div>
          </div>
        </div>
      </div>
      <div className="university-swiper">
        <div className="swiper-top">
          <Marquee pauseOnHover={true}>
            <div className="university-card">
              <div className="card-img">
                <img src={tokioInternational} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-1")}</h6>
                <p>{t("university.u-description-1")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={japanEconomic} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-2")}</h6>
                <p>{t("university.u-description-2")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={pacificUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-3")}</h6>
                <p>{t("university.u-description-3")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={wasedaUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-4")}</h6>
                <p>{t("university.u-description-4")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={sokaUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-5")}</h6>
                <p>{t("university.u-description-5")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={nagoyaUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.u-name-6")}</h6>
                <p>{t("university.u-description-6")}</p>
              </div>
            </div>
          </Marquee>
        </div>
        <div className="swiper-bottom">
          <Marquee pauseOnHover={true} direction="right">
            <div className="university-card">
              <div className="card-img">
                <img src={prorowSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-1")}</h6>
                <p>{t("university.s-description-1")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={kurashikiSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-2")}</h6>
                <p>{t("university.s-description-2")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={hisaeSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-3")}</h6>
                <p>{t("university.s-description-3")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={tccSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-4")}</h6>
                <p>{t("university.s-description-4")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={hotsumaSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-5")}</h6>
                <p>{t("university.s-description-5")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={osakoSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-6")}</h6>
                <p>{t("university.s-description-6")}</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={tbsSchool} alt="photo" />
              </div>
              <div className="card-info">
                <h6>{t("university.s-name-7")}</h6>
                <p>{t("university.s-description-7")}</p>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
      <div className="container">
        <div
          onClick={() => setOpen(true)}
          className="result-content d-flex justify-center"
        >
          <HeroButton text={t("modal.props")}></HeroButton>
        </div>
      </div>
    </section>
  );
};
