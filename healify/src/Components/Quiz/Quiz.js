import React from "react";
import styles from "./Quiz.module.css";
import SpecificQuestion from "../Quiz/Questions/Question";
import { useState } from "react";
import { Score } from "./Score";
import { Header } from "../Home/Header";

const KEYWORDS = {};
const freq = {
  stress: 16,
  anxiety: 6,
  depression: 5,
  "anger management": 8,
  irritability: 3,
  phobia: 1,
  insomania: 3,
  exercise: 6,
  fitness: 7,
  "physical health": 11,
  "healthy diet": 6,
  nutrition: 4,
  "de-addiction": 2,
  rehab: 2,
  "self control": 12,
  "self management": 7,
  faith: 11,
  coping: 15,
  resilience: 4,
  yoga: 2,
  meditation: 6,
  "decision making": 2,
  leadership: 2,
  peace: 3,
  thankfulness: 14,
  thanksgiving: 5,
  kindness: 5,
  overthinking: 3,
  "social anxiety": 7,
  friendliness: 5,
  spirituality: 5,
  prayer: 3,
};

const calculate_age = (dob) => {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);

  return Math.abs(age_dt.getUTCFullYear() - 1970);
};

export const Quiz = ({ questions, category, gender, agegroup }) => {
  const [warning, setWarning] = useState(-1);
  const [option, setOption] = useState(0);
  const [score, setScore] = useState(0);

  // For Checking whether api is working correctly
  console.log("Gender is ", gender);
  console.log("Age is ", agegroup);

  // Age Group is actually bday
  // Change birthday to age
  //------------------------------------------------
  let newDate = new Date(agegroup);
  newDate = newDate.toString().slice(0, 15);

  //---------------------------------------------//
  const handleChange = (e) => {
    const { value } = e.target;
    setOption(value);
    console.log(option);
    setWarning(0);
  };

  const [counter, setCounter] = useState(1);
  const [que, setQue] = useState(questions[0]);
  const [questionSet, setQuestionSet] = useState(
    questions.filter(
      (qn) =>
        qn.agegroup === "all" ||
        (qn.agegroup === agegroup &&
          (qn.gender === "neutral" || qn.gender === gender))
    )
  );

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
      let keywordScore = 0;
      switch (sc) {
        case 1:
          val = 5;
          keywordScore = -2;
          break;
        case 2:
          val = 4;
          keywordScore = -1;
          break;
        case 3:
          val = 3;
          keywordScore = 0;
        case 4:
          val = 2;
          keywordScore = 1;
          break;
        case 5:
          val = 1;
          keywordScore = 2;
          break;
        default:
          val = 0;
          break;
      }
      setScore(() => score + val);
      for (let i = 0; i < que.keywords.length; i++) {
        if (!KEYWORDS[que.keywords[i]]) {
          KEYWORDS[que.keywords[i]] = keywordScore / freq[que.keywords[i]];
        } else {
          KEYWORDS[que.keywords[i]] += keywordScore / freq[que.keywords[i]];
        }
      }
      setCounter(() => counter + 1);
      const newQuestionSet = questionSet.filter((qn) => que.id !== qn.id);
      setQuestionSet(newQuestionSet);
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
        <Score score={score} KEYWORDS={KEYWORDS} category={category} />
      )}
    </>
  );
};
