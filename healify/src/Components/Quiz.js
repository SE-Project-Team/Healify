import React from "react";
import image from "../Assets/homePage.webp";
import brainImg from "../Assets/brain.jpg";
import styles from "./Quiz.module.css";
import styles2 from "./Home.module.css";
import { Questions } from "./Quiz/Questions";
import SpecificQuestion from "./Quiz/Question";
import { useState } from "react";

export const Quiz = () => {
  let i = 0;
  const [arr, setArr] = useState(Questions);
  const [que, setQue] = useState(Questions[0]);
  console.log(Questions);
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
        <SpecificQuestion key={que.id} {...que}></SpecificQuestion>
        <button
          className={styles.playBtn}
          onClick={() => setQue(Questions[++i])}
        >
          Next
        </button>
      </div>
    </>
  );
};
