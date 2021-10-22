import { useState } from "react";

export const useToken = () => {
  const getToken = () => {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };
  const [token, setToken] = useState(getToken());

  const saveToken = (newToken) => {
    localStorage.setItem("token", JSON.stringify(newToken));
    setToken(newToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};
