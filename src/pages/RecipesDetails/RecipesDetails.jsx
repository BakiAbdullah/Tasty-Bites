import React, { useContext, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import RecipeDetailsCard from "./RecipeDetailsCard";

const RecipesDetails = () => {
  

  const { recipesData } = useContext(AuthContext);
  console.log(recipesData);
  // const { id } = useParams();
  // const singleChefData = useLoaderData();
  // console.log(singleChefData);

  return (
    <div className="container mx-auto my-12">
      <h2>Chef dataaaaaaa!!</h2>
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
