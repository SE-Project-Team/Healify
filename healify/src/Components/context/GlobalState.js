import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
const initialstate = {
  users: [
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
    { id: 1, name: "User One", email: "bukkeroopa@gmail.com" },
    { id: 2, name: "User Two", email: "roopa@gmail.com" },
    { id: 3, name: "User Three", email: "bukke@gmail.com" },
  ],
};
const initFunc = async (initial) => {
  const token = JSON.parse(localStorage.getItem("token"));

  console.log("HI");
  let allFriends;
  await axios
    .get("/api/v1/mailer/get-all-contacts", {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log("here", res.data.data);
      allFriends = res.data.data;
    })
    .catch((err) => {
      if (err.response) {
        console.log(err.response.body);
      }
      allFriends = {};
    });
  return {
    users: allFriends,
  };
};
export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  // Actions

  const removeUser = (user) => {
    dispatch({
      type: "REMOVE_USER",
      payload: { user },
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: { user },
    });
  };

  const setUsers = () => {
    dispatch({
      type: "GET_USERS",
    });
  };
  return (
    <GlobalContext.Provider
      value={{ users: state.users, removeUser, addUser, setUsers }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
