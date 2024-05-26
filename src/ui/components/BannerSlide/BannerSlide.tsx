import { styled } from "styled-components";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "./component.css";

import Banner1 from "../../../assets/Banner1.png";
import Banner2 from "../../../assets/Banner2.png";
import Banner3 from "../../../assets/Banner3.jpeg";
import Banner4 from "../../../assets/Banner4.png";

const Container = styled.div`
  width: 100%;
  height:auto;
  margin: 15px auto;
  border-radius: 8px;

  @media only screen and (min-width: 720px){
    width: 90%;
  }

  @media only screen and (min-width: 1080px){
    width: 960px;
    height: 482px;
  }
`;

const BannerSlide = () => {
  return (
    <Container>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="swiper-banner-slide"
      >
        <SwiperSlide>
          <img src={Banner1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Banner4} />
        </SwiperSlide>
      </Swiper>
    </Container>
  );
};

export default BannerSlide;
