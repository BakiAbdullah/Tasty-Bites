import React, { useContext, useState } from "react";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import RecipeDetailsCard from "./RecipeDetailsCard";
import ChefBannerCard from "./ChefBannerCard";

const RecipesDetails = () => {
  const singleChefdata = useLocation().state;
  const chefName = singleChefdata.name;

  // console.log(singleChefdata);

  const { recipesData } = useContext(AuthContext);
  // console.log(recipesData);
  // const { id } = useParams();
  // const singleChefData = useLoaderData();
  // console.log(singleChefData);

  return (
    <div className="container mx-auto my-12">
      <div>
        <ChefBannerCard value={singleChefdata}></ChefBannerCard>
      </div>
      <h2 className="text-center text-5xl font-bold my-12">
        3 best dishes of <span className="text-amber-500">{chefName}</span>
      </h2>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8">
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
