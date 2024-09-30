import Marquee from "react-fast-marquee";
import { HeroButton } from "../button/heroButton";
import intiensiveImg from "../../assets/house-1.png";
import { FC } from "react";
interface PupilProps{
    setOpen: (item: boolean)=> void
}

export const Pupil: FC<PupilProps> = ({setOpen}) => {
  return (
    <section className="pupil" id="result">
      <div className="container">
        <div className="pupil-inner">
          <div className="pupil-content ">
            <div className="title ">
              Muvafaqqiyatli bitiruvchilarimizga universitet tanlash va grant
              yutishda yordam beramiz
            </div>
          </div>
        </div>
      </div>
      <div className="pupil-swiper">
        <div className="swiper-top">
          <Marquee>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
              </div>
            </div>
            <div className="course-card">
              <div className="card-img">
                <img src={intiensiveImg} alt="photo" />
              </div>
              <div className="card-info">
                <div className="degree d-flex justify-between">
                  <h6>Intiensive</h6>
                  <p className="flex-center">Davomiyligi: 5 oy</p>
                </div>
                <div className="description">
                  <span>Koreys tilini</span> chuqur o’zlashtirmoqchi bo’lganlar
                  uchun haftada 6 kun 1.5 soatdan intensive kurs.
                </div>
                <div className="card-bottom d-flex justify-between items-center">
                  <button className="btn">Ro’yxatdan o’tish</button>
                  <div className="prices">970.000 so’m /oy</div>
                </div>
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
