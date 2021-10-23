import React, { Component } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import styles from "./Quiz.module.css";
import styles2 from "../Home.module.css";
import { useEffect } from "react";
import axios from "axios";
import { Header } from "../Header";

const map = (category) => {
  let res;
  switch (true) {
    case category === "Ill Being and Well Being":
      res = 1;
      break;
    case category === "Control and Coping":
      res = 2;
      break;
    case category === "Relationships and Belonging":
      res = 3;
      break;
    case category === "Self Perception":
      res = 4;
      break;
  }
  return res;
};
export const Score = ({ score, category }) => {
  let str = "";
  switch (true) {
    case score < 10:
      str = "Poor";
      break;
    case score <= 15:
      str = "Average";
      break;
    case score <= 20:
      str = "Good";
      break;
    case score <= 25:
      str = "Very Good";
      break;
    default:
      break;
  }
  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios
      .post(
        "http://localhost:5000/api/v1/quiz/score",
        { quizId: map(category), score, remarks: str },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <>
      <Header />
      <div className={styles.quizcontainer}>
        <h1 className={styles.counter}>Overall Score: {str}</h1>
        <div>
          <h3 className={styles.counter}> Your score is {score}/25</h3>
        </div>
      </div>
    </>
  );
};
