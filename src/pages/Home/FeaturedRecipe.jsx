import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import yuba from "/yuba.jpg";

const FeaturedRecipe = () => {
  return (
    <div>
      <h2 className="font-bold text-center my-10 lg:my-16 text-4xl lg:text-5xl">
        <span className="text-red-800">Our</span> Featured Recipe
      </h2>

      <div className="flex flex-col items-center lg:flex-row  container gap-10 mx-auto px-2 lg:px-10">
        <div className="lg:w-2/4">
          <img className="rounded-lg" src={yuba} alt="" />
        </div>
        <div className="lg:w-2/4 px-3 lg:px-0">
          <h2 className="text-black text-5xl leading-tight tracking-tighter font-bold">
            Experience The <span className="text-red-800">Sublime!</span>
          </h2>
          <p className="text-black py-7">
            Chef Mark Chen prepares and serves exquisite dinners to parties from
            two to 200 at your home, business or private catering event. His
            blend of French-Mediterranean cuisine draws on a lifetime of skills
            and the knowledge that all meals, no matter how large or how small,
            are special events among family and friends
          </p>
          <button className="bg-amber-500 text-black px-6 py-2 rounded-md">
            Contact Us{" "}
            <FaLongArrowAltRight className="inline-block"></FaLongArrowAltRight>{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedRecipe;
