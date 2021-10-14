import React, { Component } from "react";
import brainImg from "../Assets/brain.jpg";
import logo from "../Assets/mentalhealth_icon_round.png";
import styles from "./Quiz.module.css";
import styles2 from "./Home.module.css";
import { Questions } from "./Quiz/Questions";
import SpecificQuestion from "./Quiz/Question";
import { useState } from "react";

export const Quiz = () => {
  const [option, setOption] = useState(-1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOption(value);
    console.log(option);
  };
  //Counter for Number of Questions
  const [counter, setCounter] = useState(1);
  const [questionSet, setQuestionSet] = useState(Questions);
  const [que, setQue] = useState(Questions[0]);

  const newQue = () => {
    setCounter(counter + 1);
    const newQuestionSet = questionSet.filter((qn) => que.id !== qn.id);
    setQuestionSet(newQuestionSet);
    setQue(questionSet[Math.floor(Math.random() * questionSet.length) + 1]);
    console.log(que.id);
    if (counter == 10) {
      //TODO Submit();
      console.log("10 qns over");
      setCounter(0);
    }
  };
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
        <div>
          <form action="" className={styles.quizForm}>
            <SpecificQuestion qnObject={que} onChangeHandle={handleChange} />
          </form>
        </div>
        <button className={styles.playBtn} onClick={newQue}>
          Next
        </button>
      </div>
    </>
  );
};
