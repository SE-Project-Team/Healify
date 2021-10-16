import React from "react";
import newsstyles from "./News.module.css";
function NewsArticle({ data }) {
  return (
    <div className={newsstyles.news}>
      <img src={data.urlToImage} className={newsstyles.news__image} />
      <h1 className={newsstyles.news__title}>{data.title}</h1>
      <p className={newsstyles.news__desc}>{data.description}<a href={data.url} className={newsstyles.readmore} target="_blank">Read more</a></p>
      <span className={newsstyles.news__author}>{data.author}</span> <br />
      <span className={newsstyles.news__published}>{data.publishedAt}</span>
      <span className={newsstyles.news__source}>{data.source.name}</span>
    </div>
  );
}

export default NewsArticle;
