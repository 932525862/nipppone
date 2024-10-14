import { FC } from "react";
import intiensiveImg from "../../assets/house-1.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

interface CourseProps {
  setOpen: (item: boolean) => void;
}

export const Course: FC<CourseProps> = ({ setOpen }) => {
  return (
    <section className="course" id="course">
      <div className="container">
        <div className="course-content">
          <div className="title">O’zingizga mos kursga ro’yxatdan o’ting</div>
          <div className="course-cards">
            <Swiper
              slidesPerView={3}
              spaceBetween={20}
              centeredSlides={true}
              loop={true}
              autoplay={true}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination, Autoplay]}
              className="mySwiper"
              breakpoints={{
                1147: {
                  slidesPerView: 3,
                  spaceBetween: 20
                },
                1028: {
                  slidesPerView: 2.7,
                  spaceBetween: 20
                },
                900: {
                  slidesPerView: 2.3,
                  spaceBetween: 20
                },
                750: {
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                650: {
                  slidesPerView: 1.7,
                  spaceBetween: 20
                },
                300: {
                  slidesPerView: 1,
                  spaceBetween: 20
                },
              }}
            >
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={intiensiveImg} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>N5 guruh</h6>
                      <p className="flex-center">Davomiyligi: 4 oy</p>
                    </div>
                    <div className="description">
                    Hiragana, katakana, oddiy so‘zlar va grammatik qoidalar. Tugatgandan so‘ng, sodda yapon tilida gapira olasiz.
                    </div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">
                        Ro’yxatdan o’tish
                      </button>
                      <div className="prices">500.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={intiensiveImg} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>N4 guruh</h6>
                      <p className="flex-center">Davomiyligi: 7 oy</p>
                    </div>
                    <div className="description">
                    O‘rtacha yapon tilini o‘rganish. Kundalik suhbatlarni tushunish va qatnashish imkoniyatini beradi.
                    </div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">
                        Ro’yxatdan o’tish
                      </button>
                      <div className="prices">500.000 so’m /oy</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={intiensiveImg} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>N3 guruh</h6>
                      <p className="flex-center">Davomiyligi: 10 oy</p>
                    </div>
                    <div className="description">
                    Yuqori o‘rta darajadagi yapon tilini o‘rganish. Murakkab matnlarni tushunish, turli mavzularda suhbatlashish va grammatikani chuqurroq bilish imkoniyatini beradi.
                    </div>
                    <button onClick={() => setOpen(true)} className="btn">
                      Ro’yxatdan o’tish
                    </button>
                    <div className="prices">500.000 so’m /oy</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={intiensiveImg} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>Maxsus sajyor guruh</h6>
                      <p className="flex-center">Davomiyligi: 6 oy</p>
                    </div>
                    <div className="description">
                    Yapon tilini professional muloqot va ish faoliyatida qo‘llash uchun o‘rganasiz. Murakkab matnlarni tushunish va ish joyida kerakli terminologiyani o‘rganishga e'tibor qaratiladi.
                    </div>
                    <button onClick={() => setOpen(true)} className="btn">
                      Ro’yxatdan o’tish
                    </button>
                    <div className="prices">500.000 so’m /oy</div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
