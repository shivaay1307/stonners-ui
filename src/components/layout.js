import React from "react";
import Banner from "./banner";
import "./components.css";
// import Trending from "../blocks/trending";
// import SwiperCore, { Navigation } from "swiper";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";

SwiperCore.use([Navigation]);

function Layout() {
  return (
    <div className="layout">
          <Banner />
      {/* <div>
        <Swiper
         className="trending-section"
          spaceBetween={10}
          slidesPerView={4}
          direction={"horizontal"}
          mousewheel={{ sensitivity: 0.5 }}
        >
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
         className="trending-section"
          spaceBetween={10}
          slidesPerView={4}
          direction={"horizontal"}
          mousewheel={{ sensitivity: 0.5 }}
        >
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
         className="trending-section"
          spaceBetween={10}
          slidesPerView={4}
          direction={"horizontal"}
          mousewheel={{ sensitivity: 0.5 }}
        >
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
         className="trending-section"
          spaceBetween={10}
          slidesPerView={4}
          direction={"horizontal"}
          mousewheel={{ sensitivity: 0.5 }}
        >
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
          <SwiperSlide>
            <Trending />
          </SwiperSlide>
        </Swiper>
      </div> */}
    </div>
  );
}

export default Layout;
