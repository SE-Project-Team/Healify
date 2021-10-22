import React, { Component } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import styles from "./Quiz.module.css";
import styles2 from "../Home.module.css";
import SpecificQuestion from "../Quiz/Questions/Question";
import { useState } from "react";
import { Score } from "./Score";

export const Quiz = ({ questions, category }) => {
  const [warning, setWarning] = useState(-1);
  const [option, setOption] = useState(0);
  const [score, setScore] = useState(0);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOption(value);
    console.log(option);
    setWarning(0);
  };

  const [counter, setCounter] = useState(1);
  const [questionSet, setQuestionSet] = useState(questions);
  const [que, setQue] = useState(questions[0]);

  const newQue = () => {
    if (warning === -1 || warning === 1) {
      setWarning(1);
      setTimeout(() => {
        setWarning((warning) => {
          if (warning === 0) {
            return;
          } else {
            setWarning(-1);
          }
        });
      }, 2000);
    } else {
      setScore(() => score + parseInt(option));

      setCounter(() => counter + 1);
      const newQuestionSet = questionSet.filter((qn) => que.id !== qn.id);
      setQuestionSet(newQuestionSet);
      // state -> we expect it to be updated but its not
      let rand1 = Math.floor(Math.random() * newQuestionSet.length);
      setQue(newQuestionSet[rand1] || questions[0]);
      setOption(0);
      setWarning(-1);
    }
  };

  return (
    <>
      {counter <= 5 ? (
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
          <div className={styles.quizBody}>
            <h2 className={styles.heading}>{category}</h2>
            <div className={styles.quizcontainer}>
              <h4 className={styles.counter}>{counter}/5</h4>
              <div>
                <form action="" className={styles.quizForm}>
                  <SpecificQuestion
                    selectedOption={option}
                    qnObject={que}
                    onChangeHandle={handleChange}
                  />
                </form>
              </div>
              <div className={styles.btnWarningPair}>
                <h5
                  className={
                    styles.warning +
                    " " +
                    (warning === 1 ? styles.warningShow : "")
                  }
                >
                  Select an option
                </h5>

                <button className={styles.playBtn} onClick={newQue}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Score score={score} category={category} />
      )}
    </>
  );
};
