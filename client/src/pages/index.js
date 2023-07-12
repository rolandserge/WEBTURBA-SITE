import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Header from '../../components/Header';
import Design from '../../components/webDesign';
import FollowUS from '../../components/FollowUS';
import Strategy from '../../components/Strategy';


export default function Home() {
  return (
    <div className="home">
      <FollowUS />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        mousewheel={true}
        modules={[Pagination, Mousewheel]}
        pagination={{
          clickable: true,
        }}
      >
        <SwiperSlide>
          <Header />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"design"}
            Illustration={"/assets/images/Rectangle-6.jpg"}
            title={"WEB DESIGN"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"dev"}
            Illustration={"/assets/images/Mon-pc.jpg"}
            title={"WEB DEV"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Design
            id={"media"}
            Illustration={"/assets/images/Rectangle-8.png"}
            title={"WEB MEDIA"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Strategy />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
