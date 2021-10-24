import React, { Component } from "react";
import styles from "./Quiz.module.css";
import SpecificQuestion from "../Quiz/Questions/Question";
import { useState } from "react";
import { Score } from "./Score";
import { Header } from "../Home/Header";

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
      let val = 0;
      let sc = parseInt(option);
      switch (sc) {
        case 1:
          val = 5;
          break;
        case 2:
          val = 4;
          break;
        case 3:
          val = 3;
          break;
        case 4:
          val = 2;
          break;
        case 5:
          val = 1;
          break;
        default:
          val = 0;
          break;
      }
      setScore(() => score + val);

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
      {counter <= 10 ? (
        <>
          <Header />
          <div className={styles.quizBody}>
            <h2 className={styles.heading}>{category}</h2>
            <div className={styles.quizcontainer}>
              <h4 className={styles.counter}>{counter}/10</h4>
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
