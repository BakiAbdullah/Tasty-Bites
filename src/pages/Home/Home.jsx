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
import { FaLongArrowAltRight } from "react-icons/fa";
import food_banner_1 from "../../../public/food_banner_1.jpg";
import food_banner_2 from "../../../public/food_banner_2.jpg";
import food_banner_3 from "../../../public/food_banner_3.jpg";
import food_banner_4 from "../../../public/food_banner_4.jpg";
import food_banner_5 from "../../../public/food_banner_5.jpg";
import ChefDetails from "./ChefDetails";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Home = () => {
  return (
    <div>
      <ChefDetails></ChefDetails>
    </div>
  );
};

export default Home;
