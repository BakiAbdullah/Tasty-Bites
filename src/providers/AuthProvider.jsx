import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [chefData, setChefData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://chef-recipe-server-side-bakiabdullah.vercel.app/")
      .then((res) => res.json())
      .then((data) => setChefData(data))
      .catch((err) => console.log(err));
    setLoading(false);
  }, []);
  // console.log(chefData);

  const authInfo = {
    chefData,
    loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
