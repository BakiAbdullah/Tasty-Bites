import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

import ChefDetailsCard from "./ChefDetailsCard";

const ChefDetails = () => {
  const allChefdata = useContext(AuthContext);
  const chefDatas = allChefdata.chefData;
  const { id } = useParams();
  const singleChefData = useLoaderData();
  console.log(singleChefData);

  //  console.log(id)
  // console.log(chefDatas);

  return (
    <div>
      <h2 className="font-bold text-center my-16 text-5xl">
        <span className="text-red-800">Our</span> Top Chefs
      </h2>

      <div className="grid px-10 gap-8 container mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {chefDatas.map((chefData) => (
          <ChefDetailsCard
            key={chefData.chefId}
            value={chefData}
          ></ChefDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
