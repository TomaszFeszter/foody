import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import API from "../utils/api";

export const AuthContext = React.createContext(null);

const tokenFromStorage = sessionStorage.getItem("token");

export const AuthProvider = ({ children }) => {
  const { data, run, isLoading, setData } = useFetch();
  const userDataReq = useFetch();
  const token = tokenFromStorage ? tokenFromStorage : data && data.id;
  const isLoggedIn = Boolean(token && userDataReq.data);

  useEffect(() => {
    if (token) sessionStorage.setItem("token", token);
  }, [token]);

  const login = ({ email, password }) => {
    if (isLoading) return;
    run(API.LOGIN(), {
      body: JSON.stringify({ email, password }),
      method: "POST",
    });
  };

  const signUp = ({ email, password }) => {
    if (isLoading) return;
    run(API.SIGN_UP(), {
      body: JSON.stringify({ email, password }),
      method: "POST",
    });
  };

  useEffect(() => {
    if (
      !token ||
      userDataReq.isLoading ||
      userDataReq.isError ||
      userDataReq.data
    )
      return;
    userDataReq.run(API.GET_USER_DATA(), { token });
  }, [token, userDataReq]);

  const logout = () => {
    if (isLoading) return;
    run(API.LOGOUT(), { token });
    setData(null);
    userDataReq.setData(null);
    sessionStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider
      value={{
        user: userDataReq.data,
        isLoggedIn,
        login,
        signUp,
        logout,
        token,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
