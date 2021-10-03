import React, { Component } from "react";
import brainImg from "../Assets/brain.jpg";
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
  let i = 0;
  const [counter, setCounter] = useState(0);
  const [que, setQue] = useState(Questions[counter]);
  console.log(Questions);
  const newQue = () => {
    setCounter(counter + 1);
    if (counter < 12) {
      setQue(Questions[counter]);
    }
  };
  return (
    <>
      <header>
        <img className={styles2.logo} src={brainImg} />
        <h1 className={styles2.heading}>Healify</h1>
        <a className={styles2.login} href="">
          Log In
        </a>
      </header>
      <div className={styles.quizcontainer}>
        <div>
          <h1 className={styles.quizquestionBox}>{que.que}</h1>
          <input
            type="radio"
            value={que.op1}
            name={que}
            onChange={handleChange}
          />{" "}
          {que.op1}
          <input
            type="radio"
            value={que.op2}
            name={que}
            onChange={handleChange}
          />{" "}
          {que.op2}
          <input
            type="radio"
            value={que.op3}
            name={que}
            onChange={handleChange}
          />{" "}
          {que.op3}
          <input
            type="radio"
            value={que.op4}
            name={que}
            onChange={handleChange}
          />{" "}
          {que.op4}
          <input
            type="radio"
            value={que.op4}
            name={que}
            onChange={handleChange}
          />{" "}
          {que.op5}
        </div>
        <button className={styles.playBtn} onClick={newQue}>
          Next
        </button>
      </div>
    </>
  );
};
