import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Portfolio.css";
import hoc from "../../img/hoc.png";
import ecommerce from "../../img/ecommerce.png";
import sidebar from "../../img/sidebar.png";
import musicapp from "../../img/musicapp.png";

const Portfolio = () => {
  return (
    <div className="portfolio">
      {/* heading  */}
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider  */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        /* onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)} */
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={musicapp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={hoc} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
