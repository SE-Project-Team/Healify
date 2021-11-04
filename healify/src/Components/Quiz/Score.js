import React from "react";
import styles from "./Quiz.module.css";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Header } from "../Home/Header";
import { ProgressBar } from "./ProgressBar";

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
    default:
      res = -1;
      break;
  }
  return res;
};
export const Score = ({ score, category, Q11Score, Q12Score }) => {
  const getMax = (object) => {
    let max = Math.max(...Object.values(object));
    return Object.keys(object).filter((key) => object[key] == max);
  };
  var max1 = getMax(Q11Score[0]);
  var max2 = getMax(Q12Score[0]);
  console.log(max1);
  console.log(max2);
  const percentage = (score * 100) / 50;
  let color = "";
  let str1 = "",
    str2 = "";
  switch (true) {
    case score <= 10:
      str1 = "Very Less Score";
      str2 = "Try to work more on your " + category;
      color = "red";
      break;
    case score <= 20:
      str1 = "Less Score";
      str2 = "Try to work on your" + category;
      color = "orange";
      break;
    case score <= 30:
      str1 = "Average Score";
      str2 = "Try to improve your score in " + category;
      color = "#99ccff";
      break;
    case score <= 40:
      str1 = "Good Score\n";
      str2 = "Your mental health is good in " + category;
      color = "#99ff66";
      break;
    case score <= 50:
      str1 = "Very Good Score\n";
      str2 = "Your mental health is great in " + category;
      color = "green";
      break;
    default:
      break;
  }
  useEffect(() => {
    const postData = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .post(
          "/api/v1/quiz/score",
          { quizId: map(category), score, remarks: str1 },
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
          console.log(err);
        });
    };
    postData();
  }, []);
  return (
    <>
      <Header />
      <div className={styles.quizcontainer}>
        <h3 className={styles.counter}> Your score is {score}/50</h3>
        <ProgressBar bgcolor={color} progress={percentage} height={30} />

        <h2 className={styles.counter}>{str1}</h2>
        <h3 className={styles.counter}>{str2}</h3>
        <h3>Physical Health keywords: {max1}</h3>
        <h3>Control and Coping keywords: {max2}</h3>
        <Link to="/QuizLanding" className={`${styles.remove}`}>
          <button className={`${styles.playBtn}`}>Back</button>
        </Link>
      </div>
    </>
  );
};
