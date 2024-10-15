
import { useTranslation } from "react-i18next";
import sertificate1 from "../../assets/certificate-1.jpg";
import sertificate2 from "../../assets/certificate-2.jpg";
import sertificate3 from "../../assets/certificate-3.jpg";
import sertificate4 from "../../assets/certificate-4.jpg";
import sertificate5 from "../../assets/certificate-5.jpg";
import sertificate6 from "../../assets/certificate-6.jpg";
import sertificate7 from "../../assets/certificate-7.jpg";
import visa1 from "../../assets/visa-1.png";
import visa2 from "../../assets/visa-2.jpg";
import visa3 from "../../assets/visa-3.jpg";
import visa4 from "../../assets/visa-4.jpg";
import visa5 from "../../assets/visa-5.jpg";
import visa6 from "../../assets/visa-6.jpg";
import visa7 from "../../assets/visa-7.jpg";
import visa8 from "../../assets/visa-8.jpg";
import Marquee from "react-fast-marquee";

export const Result = () => {
  const { t } = useTranslation() 
  return (
    <section className="result">
      <div className="container">
        <div className="result-content">
          <h4 className="title">{t("results.title-1")}</h4>
        </div>
      </div>
      <div className="result-swiper">
        <div className="swiper-top">
          <Marquee direction="right">
            <div>
              <img src={sertificate1} alt="photo" />
            </div>
            <div>
              <img src={sertificate2} alt="photo" />
            </div>
            <div>
              <img src={sertificate3} alt="photo" />
            </div>
            <div>
              <img src={sertificate4} alt="photo" />
            </div>
            <div>
              <img src={sertificate5} alt="photo" />
            </div>
            <div>
              <img src={sertificate6} alt="photo" />
            </div>
            <div>
              <img src={sertificate7} alt="photo" />
            </div>
          </Marquee>
        </div>
        
      </div>
      <div className="container">
        <div className="result-content">
          <h4 className="title">{t("results.title-2")}</h4>
        </div>
      </div>
      <div className="result-swiper">
        <div className="swiper-bottom">
          <Marquee>
            <div>
              <img src={visa1} alt="photo" />
            </div>
            <div>
              <img src={visa2} alt="photo" />
            </div>
            <div>
              <img src={visa3} alt="photo" />
            </div>
            <div>
              <img src={visa4} alt="photo" />
            </div>
            <div>
              <img src={visa5} alt="photo" />
            </div>
            <div>
              <img src={visa6} alt="photo" />
            </div>
            <div>
              <img src={visa7} alt="photo" />
            </div>
            <div>
              <img src={visa8} alt="photo" />
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
};
