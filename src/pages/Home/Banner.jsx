import React from "react";
import banner_1 from "../../assets/food_banner_1.jpg";
import quils from "../../../public/quils.jpg"
import banner_3 from "../../../public/food_banner_3.jpg";
import pancakes from "../../../public/pancakes.jpg";
import yuba from "../../../public/dumplings.jpg";
import shrimp from "../../../public/shrimp.jpg";
import beef from "../../../public/beefbroccoli.jpg";
import chicken from "../../../public/fry-chicken.jpg";

import { FaLongArrowAltRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner_1}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,4))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white"
    >
      <div className="flex justify-between gap-10 w-full container mx-auto py-16 items-center">
        <div className="w-2/5">
          <h2 className="text-white text-6xl leading-tight tracking-tighter font-bold">
            <span className="text-red-800">COOKING </span>IS A PIECE OF CAKE
          </h2>
          <p className="text-white py-7">
            Discover the art of cooking with our expert chefs and culinary
            enthusiasts. From recipes to techniques, our website offers
            everything you need to enhance your culinary skills. With our expert
            guidance and insider tips, you'll be able to take your cooking to
            the next level and impress your friends and family with your
            delicious creations....
          </p>
          <button className="bg-amber-500 text-black px-6 py-2 rounded-md">
            Contact Us{" "}
            <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
          </button>
        </div>
        <div className="w-3/5 pb-6">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={quils}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={yuba}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={shrimp}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={chicken}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={beef}
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="rounded-2xl object-cover h-[600px] w-full"
                src={pancakes}
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Banner;
