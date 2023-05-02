import React, { useContext, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Parallax,
  Autoplay,
  Pagination,
  A11y,
  EffectFade,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import ChefDetails from "./ChefDetails";
import Banner from "./Banner";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefDetails></ChefDetails>
    </div>
  );
};

export default Home;
