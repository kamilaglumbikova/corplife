import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {createContext, useEffect, useState} from 'react';
import { API_URL } from '../utils/api';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const login = async (email, password) => {
    setIsLoading(true);

    const url = API_URL + "/auth";
    const options = {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
    },
    body: JSON.stringify({
        email: email,
        password: password,
    }),
    };
    try {
      response = await fetch(url, options);
    } catch (error) {
      console.log('There was an error', error);
    }

    if (response?.ok) {
      return new Promise((resolve) => {
        resolve({
            ok: true,
            message: "Use the response here!"
        });
        response.json().then((data) => {
            console.log("DATA",data)
            if(data.message) {
              setMessage(data.message)
            } else {
              let userInfo = data;
              setUserInfo(userInfo);
              AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            }
            setIsLoading(false);
        });
      });
    } else {
      setIsLoading(false);
      console.log(`HTTP Response Code: ${response?.status}`)
    }
  };

  const logout = () => {
    setIsLoading(true);
    console.log('logout');
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        message,
        setMessage,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};