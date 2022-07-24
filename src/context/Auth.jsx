import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import API from "../utils/api";

export const AuthContext = React.createContext(null);

export const AuthProvider = ({ children }) => {
  const { data, run, isLoading, setData } = useFetch();
  const userDataReq = useFetch();
  const token = data && data.id;
  const isLoggedIn = Boolean(token && userDataReq.data);

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
    if (!token || userDataReq.isLoading || userDataReq.data) return;

    userDataReq.run(API.GET_USER_DATA(), { token });
  }, [token, userDataReq]);

  const logout = () => {
    if (isLoading) return;
    run(API.LOGOUT(), { token });
    setData(null);
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
