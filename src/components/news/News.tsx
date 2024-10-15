import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import banner1 from "../../assets/banner-1.jpg";
import banner2 from "../../assets/banner-2.jpg";
import banner3 from "../../assets/banner-3.jpg";
import { useTranslation } from "react-i18next";

const News = () => {
  const { t } = useTranslation()
  return (
    <section className="news">
      <div className="container">
        <div className="news-content">
          <h4 className="title">{t("news.title")}</h4>
          <Swiper
            loop={true}
            autoplay={true}
            breakpoints={{
              960: {
                slidesPerView: 1,
                spaceBetween: 10,
                navigation: {
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                },
                pagination: { clickable: true, el: ".swiper-pagination" },
              },
            }}
            navigation={false}
            pagination={false}
            modules={[Navigation, Pagination, Autoplay]}
          >
            <SwiperSlide>
              <img src={banner1} alt="img name" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner2} alt="img name" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={banner3} alt="img name" />
            </SwiperSlide>

            <div className="navigates ">
              <div className="swiper-button-prev">
                <GrPrevious className="text-gray-400 " />
              </div>
              <div className="swiper-button-next ">
                <GrNext className="text-gray-400 " />
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default News;
