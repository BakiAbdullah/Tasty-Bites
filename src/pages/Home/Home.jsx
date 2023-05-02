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
      {/* <div className="flex justify-between items-center gap-5 w-full container mx-auto py-8">
        <div className="w-2/6">
          <h2 className="text-black text-6xl font-bold tracking-tight">
            COOKING IS A PIECE OF CAKE
          </h2>
          <p className="text-black py-7">
            Cox's Bazar is a city, fishing port, tourism centre and district
            headquarters in southeastern Bangladesh. It is famous mostly for its
            long natural sandy beach, and it ...
          </p>
          <button className="bg-amber-500 px-6 py-2 rounded-md">
            Booking{" "}
            <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
          </button>
        </div>
        <div className="w-4/6 pb-6">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_1}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_2}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_3}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_4}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_5}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide className="">
              <img
                className="rounded-2xl h-[600px] w-full"
                src={food_banner_1}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div> */}
      <ChefDetails></ChefDetails>
    </div>
  );
};

export default Home;
