import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../Home/Header";
import newsstyles from "./News.module.css";
import Search from "./SearchNews";
import { randomqueries } from "./randomqueries";
// import ReactPaginate from "react-paginate";

const apiKey = "cf4be561623c457f984adbd633086100";

let query = "mental-health+OR+literature+OR+vacation";
const News = () => {
  const [data, setData] = useState();
  const [term, setTerm] = useState("");
  const [suggesting, setSuggesting] = useState(true);
  const [otherarticles, setotherarticles] = useState(false);
  const [page, setPage] = useState("1");
 const articlesperpage=16;
const [totalresults,settotalresults]=useState(100);
const [articlesVisited,setarticlesVisited] = useState(0);

useEffect(()=>{
    setarticlesVisited((Number(page)-1)*articlesperpage);
    if(page>3)
    {
      setSuggesting(false);
      setotherarticles(true);
      setTerm("");
    }
    else
    {
      setSuggesting(true);
    }
},[page]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    let queryTerm;
    if (suggesting) {
      axios
        .get(`/api/v1/profile`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { Keywords } = res.data.data;
          const temp = Object.entries(Keywords);
          temp.sort((a, b) => b[1] - a[1]);
          query = temp.slice(0, 3);
          queryTerm = `${query[0][0]}+OR+${query[1][0]}+OR+${query[2][0]}`;
          settotalresults(res.data.totalResults);
          console.log("totalresults-"+totalresults);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
            return;
          }
          console.log(err);
        });
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${queryTerm}&from= &language=en&sortBy=relevancy&apiKey=${apiKey}&page=${page}`
        )
        .then((response) => setData(response.data))
        .catch((error) => console.log(error));
    }
    else if(otherarticles)
    {
        const otherterm =randomqueries[0];
       axios
        .get(
          `https://newsapi.org/v2/everything?q=${otherterm}&from= &language=en&sortBy=relevancy&apiKey=${apiKey}&page=${page-3}`
        )
        .then((response) =>{ 
          setData(response.data);
          settotalresults(response.data.totalResults);
         setarticlesVisited(0)})
        .catch((error) => console.log(error));
    }
  }, [page]);
  useEffect(() => {
    if (term) {
      const queryTerm = term.split(" ").join("-");
      setSuggesting(false);
      setotherarticles(false);
      axios
        .get(
          `https://newsapi.org/v2/everything?q=${queryTerm}&from= &language=en&sortBy=relevancy&apiKey=${apiKey}&page=${page}`
        )
        .then((response) =>{ 
          setData(response.data);
          settotalresults(response.data.totalResults);})
        .catch((error) => console.log(error));
    }
  }, [term, page]);

  return (
    <>
      <Header />
       <div className={newsstyles.showcase}>
        <div className={newsstyles.overlay + " " + "px-5"}>
          <div className="text-4xl font-bold text-white mb-4 text-center">
            <h1>News Articles</h1>
          </div>
          <Search
            searchtext={(text) => {
              setTerm(text);
            }}
            className="px-5 pt-10 pb-20 "
          />
        </div>
      </div>
      <div className={newsstyles.bodyy}>
        {suggesting ? (
          <h4 className="px-5 pt-10 pb-20 ">Suggested articles:</h4>
        ) : (otherarticles?(<h4 className="px-5 pt-10 pb-20 ">Other articles :</h4>):
          <h4 className="px-5 pt-10 pb-20 ">Search Results for {term} :</h4>
        )}
        <div className={newsstyles.all__news}>
          {data
            ? data.articles.map((news) => (
                <div className={newsstyles.news}>
                  <img
                    src={news.urlToImage}
                    className={newsstyles.news__image}
                    alt="Not Found"
                    onerror="this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX9JgRB8c-unjPmV8cuIw2S_kGq3uMI21CkA&usqp=CAU'"
                  />
                  <div className={`${newsstyles.contentWrapper}`}>
                    <h3 className={newsstyles.news__title}>{news.title}</h3>
                    <p className={newsstyles.news__desc}>
                      {news.description}
                      <a
                        href={news.url}
                        className={newsstyles.readmore}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {" "}
                        Read more{" "}
                      </a>
                    </p>
                    <span className={newsstyles.news__author}>
                      {news.author}
                    </span>{" "}
                    <br />
                    <span className={newsstyles.news__published}>
                      {news.publishedAt}
                    </span>
                    <span className={newsstyles.news__source}>
                      {news.source.name}
                    </span>
                  </div>
                </div>
              ))
            : "Loading"}
        </div>
        <div className={`${newsstyles.page}`}>
          <label htmlFor="page">Page No</label>
          <input
            type="number"
            value={page}
            onChange={(e) => {
              setPage(e.target.value.toString());
            }}
          />
        </div>
      </div>
    </>
  );
};
export default News;
