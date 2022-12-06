import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { URL_BACK } from "../config";
import { loginUser } from "../redux/actions/registerAction";

export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      const res = await axios.post(`${URL_BACK}/auth/login`, {
        email,
        password,
      });
      let userData = res.data;
      setUserInfo(userData);
      setUserToken(userData.token);
      AsyncStorage.setItem("userData", JSON.stringify(userData));
      AsyncStorage.setItem("userToken", userData.token);
    } catch (e) {
      console.log(`Login error ${e}`);
    }
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem("userData");
    AsyncStorage.removeItem("userToken");
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let userData = await AsyncStorage.getItem("userData");
      let userToken = await AsyncStorage.getItem("userToken");
      userData = JSON.parse(userData);
      if (userData) {
        setUserToken(userToken);
        setUserInfo(userData);
      }
      setIsLoading(false);
    } catch (e) {
      console.log("Is logged in error : " + e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, isLoading, userToken }}>
      {children}
    </AuthContext.Provider>
  );
};
