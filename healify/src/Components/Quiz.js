import React from "react";
import image from "../Assets/lady.jpg";
import brainImg from "../Assets/brain.jpg";
import styles from "./Home.module.css";
import { Questions } from "./Quiz/Questions";
import SpecificQuestion from "./Quiz/Question";
import { useState } from "react";

export const Quiz = () => {
  const [arr, setArr] = useState(Questions);
  const [que, setQue] = useState(Questions[0]);
  console.log(Questions);
  return (
    <>
      <header>
        <img className={styles.logo} src={brainImg} />
        <h1 className={styles.heading}>Healify</h1>
        <a className={styles.login} href="">
          Log In
        </a>
      </header>
      <SpecificQuestion key={que.id} {...que}></SpecificQuestion>
    </>
  );
};
