import React from "react";
import { useState } from "react";
import styles from "./Question.module.css";

const Question = ({ que, op1, op2, op3, op4, op5 }) => {
  const [option, setOption] = useState(-1);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOption(value);
    console.log(option);
  };
  return (
    <div>
      <div>
        <h1 className={styles.quizquestionBox}>{que}</h1>
        <input
          type="radio"
          value={op1}
          name={que}
          onChange={handleChange}
        />{" "}
        {op1}
        <input
          type="radio"
          value={op1}
          name={que}
          onChange={handleChange}
        />{" "}
        {op2}
        <input
          type="radio"
          value={op1}
          name={que}
          onChange={handleChange}
        />{" "}
        {op3}
        <input
          type="radio"
          value={op1}
          name={que}
          onChange={handleChange}
        />{" "}
        {op4}
        <input
          type="radio"
          value={op1}
          name={que}
          onChange={handleChange}
        />{" "}
        {op5}
      </div>
    </div>
  );
};
export default Question;
