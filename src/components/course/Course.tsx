import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import n5 from "../../assets/n5-course.jpg"
import n3 from "../../assets/n3-course.jpg"
import n4 from "../../assets/n4-course.jpg"
import special from "../../assets/special-course.jpg"

interface CourseProps {
  setOpen: (item: boolean) => void;
}

export const Course: FC<CourseProps> = ({ setOpen }) => {
  const { t } = useTranslation()
  return (
    <section className="course" id="course">
      <div className="container">
        <div className="course-content">
          <div className="title">{t("course.title")}</div>
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
                    <img src={n5} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>{t("course.card.title-1")}</h6>
                      <p className="flex-center">{t("course.card.duration-1")}</p>
                    </div>
                    <div className="description">{t("course.card.description-1")}</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">{t("course.card.button")}</button>
                      <div className="prices">{t("course.card.price")}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={n4} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>{t("course.card.title-2")}</h6>
                      <p className="flex-center">{t("course.card.duration-2")}</p>
                    </div>
                    <div className="description">{t("course.card.description-2")}</div>
                    <div className="card-bottom d-flex justify-between items-center">
                      <button onClick={() => setOpen(true)} className="btn">{t("course.card.button")}</button>
                      <div className="prices">{t("course.card.price")}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={n3} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>{t("course.card.title-3")}</h6>
                      <p className="flex-center">{t("course.card.duration-3")}</p>
                    </div>
                    <div className="description">{t("course.card.description-3")}</div>
                    <button onClick={() => setOpen(true)} className="btn">{t("course.card.button")}</button>
                    <div className="prices">{t("course.card.price")}</div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="course-card">
                  <div className="card-img">
                    <img src={special} alt="photo" />
                  </div>
                  <div className="card-info">
                    <div className="degree d-flex justify-between">
                      <h6>{t("course.card.title-4")}</h6>
                      <p className="flex-center">{t("course.card.duration-4")}</p>
                    </div>
                    <div className="description">{t("course.card.description-4")}</div>
                    <button onClick={() => setOpen(true)} className="btn">{t("course.card.button")}</button>
                    <div className="prices">{t("course.card.price")}</div>
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
