import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
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
export const GlobalContext = createContext(initialstate);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialstate);
  // Actions
  const removeUser = (id) => {
    dispatch({
      type: "REMOVE_USER",
      payload: id,
    });
  };
  const addUser = (user) => {
    dispatch({
      type: "ADD_USER",
      payload: user,
    });
  };
  return (
    <GlobalContext.Provider value={{ users: state.users, removeUser, addUser }}>
      {children}
    </GlobalContext.Provider>
  );
};
