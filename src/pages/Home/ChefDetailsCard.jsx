import React from "react";
import { FaLongArrowAltRight, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazy-load";

const ChefDetailsCard = (props) => {
  const chefData = props.value;
  const { bio, chefId, likes, name, numOfRecipes, picture, yearOfExp } =
    chefData;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <LazyLoad>
        <img className="w-full h-[400px] lg:h-[650px] object-cover" src={picture} />
      </LazyLoad>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge text-white">
            {" "}
            <div className="flex items-center p-2">
              <FaThumbsUp className="mr-2 text-white"></FaThumbsUp> {likes}
            </div>{" "}
          </div>
        </h2>
        <p className="my-3">{bio.slice(0, 125)}...</p>
        <div className="">
          <div className="space-y-3">
            <button
              type="button"
              className="border-2 border-red-800  text-black px-6 py-1  leading-none flex items-center rounded-lg"
            >
              Years of Experience:{" "}
              <span className="p-1 rounded text-black font-semibold ml-2">
                {yearOfExp}
              </span>
              yrs
            </button>
            <button
              type="button"
              className="border-2 border-red-800  text-black px-6 py-1 leading-none flex items-center rounded-lg"
            >
              Number Of Recipes:{" "}
              <span className="p-1 rounded text-black font-semibold ml-2">
                {numOfRecipes}
              </span>
            </button>
          </div>
          <Link to={`/recipedetails/${chefId}`} state={chefData}>
            <button className="bg-red-900 text-white px-6 py-2 mt-8 rounded-md">
              View Recipes{" "}
              <FaLongArrowAltRight className="inline-block text-white duration-150 hover:transition-all hover:translate-x-1"></FaLongArrowAltRight>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChefDetailsCard;
