import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [chefData, setChefData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chef-recipe-server-side-bakiabdullah.vercel.app/chefdata")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // console.log(chefData);

  useEffect(() => {
    fetch("https://chef-recipe-server-side-bakiabdullah.vercel.app/recipes")
      .then((res) => res.json())
      .then((data) => setRecipesData(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // console.log(recipesData);

  const authInfo = {
    chefData,
    recipesData,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
