import React, { useState, useEffect } from "react";
import { Header } from "../Home/Header";
import memestyles from "./Memes.module.css";
const url = "https://meme-api.herokuapp.com/gimme/wholesomememes";

export const Memes = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await fetch(url);
    const jsonData = await response.json();
    setUserData(jsonData);
  };

  return (
    <>
      <Header />
      <div
        id="carouselMultiItemExample"
        className={
          memestyles.carousel + " " + "slide carousel-dark text-center"
        }
        data-mdb-ride="carousel"
      >
        <div className="d-flex justify-content-center mb-4"></div>
        <div className="carousel-inner py-4">
          <div className="carousel-item active">
            <div className="container">
              <div className="card ">
                <img src={userData.url} className="card-img-top" alt="..." />
              </div>
              <div className="card-body">
                <a href="" className="btn btn-success btn-lg nsbtns">
                  Download&nbsp;&nbsp;
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-download"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                    <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
                  </svg>
                </a>
                <a
                  href=""
                  className={"btn btn-primary btn-lg" + " " + memestyles.nsbtns}
                >
                  Next&nbsp;&gt;&gt;
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
