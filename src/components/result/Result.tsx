import { HeroButton } from "../button/heroButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import studentImg from "../../assets/student-certificate.png";

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
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              662: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              950: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              reverseDirection: true
            }}
            mousewheel={
              {invert: true}
            }
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="swiper-bottom">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1300: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
            speed={2000}
            loop={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={studentImg}
                alt="photo"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="container">
        <div className="result-content d-flex justify-center">
          <a href="#support"><HeroButton text="ariza qoldirish"></HeroButton></a>
        </div>
      </div>
    </section>
  );
};
