import React, { Component } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import styles from "./Quiz.module.css";
import styles2 from "../Home.module.css";
import { useEffect } from "react";
import axios from "axios";

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
  var str = "";
  switch (true) {
    case score < 10:
      str = "Low";
      break;
    case score <= 15:
      str = "Moderate";
      break;
    case score <= 20:
      str = "High";
      break;
    case score <= 25:
      str = "Very High";
      break;
    default:
      break;
  }
  useEffect(async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    await axios
      .post(
        "http://localhost:5000/api/v1/quiz/score",
        { quizId: map(category), score },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  return (
    <>
      <header className={styles2.header}>
        <div className={styles2.threeLineBtn}>
          <ul className={styles2.menuBtnCustom}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className={styles2.logo} src={logo} />
        <div>
          <h1 className={styles2.heading}>Healify</h1>
        </div>
        <ul className={"nav " + styles2.settingsList}>
          <li className={"nav-link"}>About</li>
          <li className={"nav-link"}>Contact Us</li>
          <li className={"nav-link"}>Profile</li>
          <li className={styles2.navLoginBtn} id={styles2.idLoginBtn}>
            Login
          </li>
          <li className={styles2.navLoginBtn} id={styles2.navSignUp}>
            Sign Up
          </li>
        </ul>
      </header>
      <div className={styles.quizcontainer}>
        <h1 className={styles.counter}>Overall Score: {str}</h1>
        <div>
          <h3 className={styles.counter}> Your score is {score}/25</h3>
        </div>
      </div>
    </>
  );
};
