import React, { useContext } from "react";
import { useLoaderData, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const ChefDetails = () => {
  const allChefdata = useContext(AuthContext);
  const chefDatas = allChefdata.chefData;
  console.log(chefDatas);

  return (
    <div>
      <h2 className="font-bold text-center my-16 text-5xl">Our Top Chefs</h2>

      <div className="grid gap-8 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chefDatas.map((chefData) => {
          return (
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img
                  className="w-full h-[650px] object-cover"
                  src={chefData.picture}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {chefData.name}
                  <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="my-3">{chefData.bio.slice(0, 125)}...</p>
                <div className="">
                  <div>
                    <button
                      type="button"
                      class="border-2 border-red-800  text-black px-6 py-1  leading-none flex items-center"
                    >
                      Years of Experience{" "}
                      <span class="p-1 rounded text-red-600 font-semibold ml-2">
                        {chefData.yearOfExp}
                      </span>
                    </button>
                  </div>
              
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ChefDetails;
