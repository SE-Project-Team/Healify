import React, { Component } from "react";
import styles from "./Quiz.module.css";
import { useEffect } from "react";
import axios from "axios";
import { Header } from "../Home/Header";

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
    case score <= 10:
      str = "Very Bad";
      break;
    case score <= 20:
      str = "Bad";
      break;
    case score <= 30:
      str = "Average";
      break;
    case score <= 40:
      str = "Good";
      break;
    case score <= 50:
      str = "Very Good";
      break;
    default:
      break;
  }
  useEffect(() => {
    const postData = async () => {
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
    };
    postData();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.quizcontainer}>
        <h1 className={styles.counter}>Overall Score: {str}</h1>
        <div>
          <h3 className={styles.counter}> Your score is {score}/50</h3>
        </div>
      </div>
    </>
  );
};
