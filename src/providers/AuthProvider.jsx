import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [chefData, setChefData] = useState([]);
  const [recipesData, setRecipesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState(null);
  const [user, setUser] = useState(null);

  const handleUserName = (name) => {
    setUsername(name);
  };
  console.log(user);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleAuthProvider);
  };

  // ===== Github signIn using firebase ======
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        setLoading(true);
        setUser(loggedUser);
      })
      .catch(console.error());
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

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

  // Auth State Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
      // console.log("Logged in user inside auth state Observer", loggedUser);
      setUser(loggedUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    username,
    chefData,
    recipesData,
    loading,
    setUser,
    createUser,
    signIn,
    signInWithGoogle,
    logOut,
    handleUserName,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
