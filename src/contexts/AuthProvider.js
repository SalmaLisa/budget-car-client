import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const auth = getAuth(app);

  //create user
  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //login
  const login = (email, password) => {
    setIsLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  //google Sign In
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logout = () => {
    setIsLoading(true)
    return signOut(auth);
  };
  //set user monitor
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser === null || currentUser) {
        setUser(currentUser);
        setIsLoading(false)
      }
    });
    return () => unSubscribe();
  }, [auth]);
  const authInfo = {
    user,
    isLoading,
    createUser,
    login,
    googleSignIn,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
