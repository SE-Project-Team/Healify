import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
export const NewsContext = createContext();
export const NewsContextProvider = (props) => {
  const [data, setData] = useState();
  const apiKey = "41dd8c7e43b8464296e19c0e8e647b72";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=mental-health+OR+literature+OR+fun+OR+games&from= &sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <NewsContext.Provider value={{ data }}>
      {props.children}
    </NewsContext.Provider>
  );
};
