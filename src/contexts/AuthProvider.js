import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext("");
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
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

  //update user info 
  const updateUserName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name
    })
  }
  //google Sign In
  const googleSignIn = () => {
    setIsLoading(true)
    return signInWithPopup(auth, googleProvider);
  };

  //log out
  const logout = () => {
    setIsLoading(true)
    localStorage.removeItem("accessToken")
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
    updateUserName,
    logout,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
