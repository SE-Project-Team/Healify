import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Home/Header";
import newsstyles from "./News.module.css";
 const News= (props) => {
  const [data, setData] = useState();
  const apiKey = "cf4be561623c457f984adbd633086100";

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=mental-health+OR+literature+OR+vacation&from= &sortBy=publishedAt&apiKey=${apiKey}`
      )
      .then((response) => setData(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Header />
      <div className={newsstyles.bodyy}>
        <h1 className={newsstyles.head__text}>News Articles</h1>
        <div className={newsstyles.all__news}>
          {data
            ? data.articles.map((news) => (
                 <div className={newsstyles.news}>
                 <img
                   src={news.urlToImage}
                   className={newsstyles.news__image}
                   alt="news" />
                 <h1 className={newsstyles.news__title}>{news.title}</h1>
                 <p className={newsstyles.news__desc}>
                   {news.description}
                    <a href={news.url} className={newsstyles.readmore} target="_blank" rel="noreferrer"> Read more </a>
                 </p>
                 <span className={newsstyles.news__author}>{news.author}</span> <br />
                 <span className={newsstyles.news__published}>{news.publishedAt}</span>
                 <span className={newsstyles.news__source}>{news.source.name}</span>
               </div>)): "Loading"}
                </div>
                </div>
                </>
  );
};
export default News;