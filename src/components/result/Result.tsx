import { HeroButton } from "../button/heroButton";
import studentImg from "../../assets/student-certificate.png";
import Marquee from "react-fast-marquee";

export const Result = () => {
  return (
    <section className="result">
      <div className="container">
        <div className="result-content">
          <h4 className="title">
            O’quvchilarimizning natijalari TOPIK 6 gacha
          </h4>
        </div>
      </div>
      <div className="result-swiper">
        <div className="swiper-top">
          <Marquee direction="right">
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
          </Marquee>
        </div>
        <div className="swiper-bottom">
          <Marquee>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
            <div>
              <img src={studentImg} alt="photo" />
            </div>
          </Marquee>
        </div>
      </div>
      <div className="container">
        <div className="result-content d-flex justify-center">
          <a href="#support">
            <HeroButton text="ariza qoldirish"></HeroButton>
          </a>
        </div>
      </div>
    </section>
  );
};
