import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () => toast("Added to favourite recipe!");

const RecipeDetailsCard = (props) => {
  const { cookingMethod, imgUrl, ingredients, rating, recipeName } =
    props.value;

  const [disabled, setDisabled] = useState(false);
  const handleDisabled = () => {
    setDisabled(!disabled);
    // notify();
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img className="h-[270px] w-full object-cover" src={imgUrl} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{recipeName}</h2>
        <p className="font-semibold">
          Ingredients:{" "}
          <span className="font-normal text-sm">
            {ingredients.toString().split(",").join(", ")}.
          </span>
        </p>
        <p className="font-semibold">
          Cooking Method:{" "}
          <span className="font-normal text-sm">
            {cookingMethod.split(" ").join("\n")}
          </span>
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => {
              handleDisabled(), notify();
            }}
            className={`btn border-none text-white ${
              disabled ? "btn-disabled" : "btn-active"
            }`}
          >
            Add to Favourite
          </button>
          <ToastContainer autoClose={1500} />
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailsCard;
