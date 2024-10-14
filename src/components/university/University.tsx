import Marquee from "react-fast-marquee";
import { HeroButton } from "../button/heroButton";
import intiensiveImg from "../../assets/house-1.png";
import { FC } from "react";

interface UniversityProps{
    setOpen: (item: boolean)=> void
}

export const University: FC<UniversityProps> = ({setOpen}) => {
  return (
    <section className="university" >
      <div className="container">
        <div className="university-inner">
          <div className="university-content ">
            <div className="title ">
              Muvafaqqiyatli bitiruvchilarimizga til maktablari va universitet tanlash va grant yutishda yordam beramiz
            </div>
          </div>
        </div>
      </div>
      <div className="university-swiper">
        <div className="swiper-top">
          <Marquee pauseOnHover={true}>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Tokyo International University</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sunt delectus? Nostrum aliquid maiores suscipit labore reiciendis possimus explicabo, quibusdam amet provident voluptas. Enim laboriosam, blanditiis </p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Japan University of Economics.</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, sunt delectus? Nostrum aliquid</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Ritsumeikan Asia Pacific University</h6>
                <p>Lorem ipsum dolor sit amet conseciquid maiores suscipit labore reiciendis possimus explicabo, quibusdam amet provident voluptas. Enim laboriosam, blanditiis voluptatibus aliquam corrupti voluptate?</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Waseda University</h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Liberoabore reiciendis possimus provident voluptas. Enim laboriosam, blanditiis voluptatibus aliquam corrupti voluptate?</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Soka University</h6>
                <p>Lorem ipsum dolor sit amet consectetur  reiciendis possimus explicabo, quibusdam amet provident voluptas. Enim laboriosam, blanditiis voluptatibus aliquam corrupti voluptate?</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Nagoya University</h6>
                <p>Lorem ipsum dolor sit amet consectetur  reiciendis possimus explicabo, quibusdam amet provident voluptas. Enim laboriosam, blanditiis voluptatibus aliquam corrupti voluptate?</p>
              </div>
            </div>
            
          </Marquee>
        </div>
      </div>
      <div className="container">
        <div onClick={() => setOpen(true)} className="result-content d-flex justify-center">
            <HeroButton text="bog'lanish"></HeroButton>
        </div>
      </div>
    </section>
  );
};
