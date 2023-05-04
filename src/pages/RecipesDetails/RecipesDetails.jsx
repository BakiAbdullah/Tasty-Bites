import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import RecipeDetailsCard from "./RecipeDetailsCard";
import ChefBannerCard from "./ChefBannerCard";
import Header from "../Shared/Header/Header";

const RecipesDetails = () => {
  // const singleChefdata = useLocation().state;
  // console.log(singleChefdata);
  // const chefName = singleChefdata?.name;

  const { recipesData } = useContext(AuthContext);
  // console.log(recipesData);
  const { id } = useParams();
  // console.log(id);
  const singleChefInfo = useLoaderData();
  const name = singleChefInfo.name;

  // console.log(singleChefInfo);

  return (
    <div className="container mx-auto my-12">
      <div>
        <ChefBannerCard value={singleChefInfo}></ChefBannerCard>
      </div>
      <h2 className="text-center text-3xl lg:text-4xl font-bold px-1 my-6 lg:my-12">
        3 best dishes of <span className="text-amber-500">{name}</span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 px-2 lg:px-0 gap-8">
        {recipesData.slice(0, 3).map((recipe) => (
          <RecipeDetailsCard
            key={recipe.recipeName}
            value={recipe}
          ></RecipeDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default RecipesDetails;
