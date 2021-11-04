import React from "react";
import styles from "./Quiz.module.css";
import SpecificQuestion from "../Quiz/Questions/Question";
import { useState } from "react";
import { Score } from "./Score";
import { Header } from "../Home/Header";

export const Quiz = ({ questions, category }) => {
  const Q11Keywords = [
    "stress",
    "anxiety",
    "depression",
    "anger",
    "irritability",
    "muscle pains",
    "phobia",
    "insomania",
    "exercise",
    "fitness",
    "physical health",
    "healthy diet",
    "nutrition",
    "de-addiction",
    "rehab",
  ];
  const Q12Keywords = [
    "self control",
    "self management",
    "stress",
    "confidence",
    "anxiety",
    "coping",
    "irritability",
    "anger",
  ];
  const [Q11Score, setQ11Score] = useState([
    {
      stress: 0,
      anxiety: 0,
      depression: 0,
      anger: 0,
      irritability: 0,
      "muscle pains": 0,
      phobia: 0,
      insomania: 0,
      exercise: 0,
      fitness: 0,
      "physical health": 0,
      "healthy diet": 0,
      nutrition: 0,
      "de-addiction": 0,
      rehab: 0,
    },
  ]);
  const [Q12Score, setQ12Score] = useState([
    {
      "self control": 0,
      "self management": 0,
      stress: 0,
      confidence: 0,
      anxiety: 0,
      coping: 0,
      irritability: 0,
      anger: 0,
    },
  ]);
  const [warning, setWarning] = useState(-1);
  const [option, setOption] = useState(0);
  const [score, setScore] = useState(0);
  const handleChange = (e) => {
    const { value } = e.target;
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
      let keywordScore = 0;
      let newQ11Score = [...Q11Score];
      let newQ12Score = [...Q12Score];
      switch (sc) {
        case 1:
          val = 5;
          keywordScore = 1;
          break;
        case 2:
          val = 4;
          keywordScore = 2;
          break;
        case 3:
          val = 3;
          keywordScore = 3;
        case 4:
          val = 2;
          keywordScore = 4;
          break;
        case 5:
          val = 1;
          keywordScore = 5;
          break;
        default:
          val = 0;
          break;
      }
      setScore(() => score + val);
      if (que.id >= 1 && que.id <= 19) {
        for (let i = 0; i < que.keywords.length; i++) {
          newQ11Score[0][que.keywords[i]] += keywordScore;
        }
        setQ11Score(newQ11Score);
      } else {
        for (let i = 0; i < que.keywords.length; i++) {
          newQ12Score[0][que.keywords[i]] += keywordScore;
        }
        setQ12Score(newQ12Score);
      }
      setCounter(() => counter + 1);
      const newQuestionSet = questionSet.filter((qn) => que.id !== qn.id);
      setQuestionSet(newQuestionSet);
      let rand1 = Math.floor(Math.random() * newQuestionSet.length);
      setQue(newQuestionSet[rand1] || questions[0]);
      setOption(0);
      setWarning(-1);
      console.log(Q11Score);
      console.log(Q12Score);
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
        <Score
          score={score}
          Q11Score={Q11Score}
          Q12Score={Q12Score}
          category={category}
        />
      )}
    </>
  );
};
