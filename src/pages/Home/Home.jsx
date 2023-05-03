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
import FeaturedRecipe from "./FeaturedRecipe";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <ChefDetails></ChefDetails>
      <FeaturedRecipe></FeaturedRecipe>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
