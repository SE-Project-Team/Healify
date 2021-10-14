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
  const [counter, setCounter] = useState(0);
  const [que, setQue] = useState(Questions[counter]);

  const newQue = () => {
    setCounter(counter + 1);
    if (counter < 79) {
      setQue(Questions[counter]);
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
          <h1 className={styles.quizquestionBox}>{que.que}</h1>
          <form action="" className={styles.quizForm}>
            <div>
              <input
                type="radio"
                id={1}
                value={que.op1}
                name={que}
                onChange={handleChange}
              />{" "}
              <label for={1} htmlFor={que.op1}>
                {que.op1}
              </label>
            </div>

            <div>
              <input
                id={2}
                type="radio"
                value={que.op2}
                name={que}
                onChange={handleChange}
              />{" "}
              <label for={2} htmlFor={que.op2}>
                {que.op2}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id={3}
                value={que.op3}
                name={que}
                onChange={handleChange}
              />{" "}
              <label for={3} htmlFor={que.op3}>
                {que.op3}
              </label>
            </div>
            <div>
              <input
                type="radio"
                id={4}
                value={que.op4}
                name={que}
                onChange={handleChange}
              />{" "}
              <label for={4} htmlFor={que.op4}>
                {que.op4}
              </label>
            </div>
            <div>
              <input
                type="radio"
                value={que.op5}
                id={5}
                name={que}
                onChange={handleChange}
              />{" "}
              <label for={5} htmlFor={que.op5}>
                {que.op5}
              </label>
            </div>
          </form>
        </div>
        <button className={styles.playBtn} onClick={newQue}>
          Next
        </button>
      </div>
    </>
  );
};
