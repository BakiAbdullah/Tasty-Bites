import React from "react";
import dumpling from "../../../public/dumplings.jpg";
import { FaLongArrowAltRight } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${dumpling}), linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,4))`,
        backgroundBlendMode: "overlay",
      }}
      className="bg-cover bg-center min-h-screen text-white"
    >
      <div className="w-full text-center container  lg:mx-32 py-16">
        <div className="w-full px-2 lg:px-5">
          <h2 className="text-white text-3xl lg:text-6xl leading-tight tracking-normal font-bold">
            "Browse our traditional menus or let us create something new for
            you."
          </h2>
          <p className="text-white py-7 px-8 lg:px-24">
            Alanzo, along with his team, offers culinary and management
            services. We have the experience to provide concept development
            strategies and best practice principles in order to achieve maximum
            sales performance.....
          </p>
          <div className="flex justify-center gap-5">
            <button className="bg-amber-500 text-black px-6 py-2 rounded-md">
              Our Team{" "}
              <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
            </button>
            <button className="bg-amber-500 text-black px-6 py-2 rounded-md">
              Baking Class{" "}
              <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
