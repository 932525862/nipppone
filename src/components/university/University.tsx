import Marquee from "react-fast-marquee";
import { HeroButton } from "../button/heroButton";
import intiensiveImg from "../../assets/house-1.png";
import tokioInternational from "../../assets/tokio-international.jpg"
import japanEconomic from "../../assets/japan-economic.png"
import pacificUniversity from "../../assets/pacific-university.jpg"
import wasedaUniversity from "../../assets/waseda-university.jpg"
import nagoyaUniversity from "../../assets/nagoya-university.jpg"
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
                <img src={tokioInternational} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Tokyo International University</h6>
                <p>Tokio Xalqaro Universiteti (TIU) (tōkyō Kokusai Daigaku, Tōkyō Kokusai Daigaku ) ​​1965-yilda tashkil etilgan xususiy, tadqiqotga yo‘naltirilgan liberal san'at universitetidir. Uning asosiy kampusi Toshima shahrida (Tokio) joylashgan</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={japanEconomic} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Japan University of Economics.</h6>
                <p>Universitet xalqaro talabalar soni bo'yicha Yaponiyada 4-o'rinda turadi.Tokio kampusidagi talabalarning 80% dan ortig'i xorijdan. </p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={pacificUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Ritsumeikan Asia Pacific University</h6>
                <p>Yaponiyadagi xususiy universitetdir . APU 2000 yilda davlat va xususiy sektorning uchta partiyasi: Oita prefekturasi, Beppu shahri va Ritsumeikan Trust hamkorligida tashkil etilgan.</p>
              </div>
            </div>
            <div className="university-card">
              <div className="card-img">
                <img src={wasedaUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Waseda University</h6>
                <p>Tokioning Shinjuku shahridagi xususiy tadqiqot universiteti . 1882 yilda Yaponiyaning beshinchi Bosh vaziri Okuma Shigenobu tomonidan Tokyo professional maktabi sifatida asos solingan maktab 1902 yilda rasman Vaseda universiteti deb o'zgartirildi</p>
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
                <img src={nagoyaUniversity} alt="photo" />
              </div>
              <div className="card-info">
                <h6>Nagoya University</h6>
                <p>U 1939 yilda Yaponiyaning o'sha paytdagi Imperiyasidagi to'qqizta Imperator Universitetlarining oxirgisi sifatida tashkil etilgan va hozirda Belgilangan Milliy Universitet hisoblanadi.</p>
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
