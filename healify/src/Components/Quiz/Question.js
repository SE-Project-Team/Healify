import React from "react";
import { useState } from "react";
import styles from "./Question.module.css";

const Question = ({ qnObject, onChangeHandle }) => {
  /* Lifting state up */
  // const [option, setOption] = useState(-1);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setOption(value);
  //   console.log(option);
  // };
  return (
    <div>
      <div>
        <h1 className={styles.quizquestionBox}>{qnObject.que}</h1>
        <div>
          <input
            type="radio"
            id={1}
            value={qnObject.op1}
            name={qnObject}
            onChange={onChangeHandle}
          />{" "}
          <label htmlFor={1}>{qnObject.op1}</label>
        </div>

        <div>
          <input
            id={2}
            type="radio"
            value={qnObject.op2}
            name={qnObject}
            onChange={onChangeHandle}
          />{" "}
          <label htmlFor={2}>{qnObject.op2}</label>
        </div>
        <div>
          <input
            type="radio"
            id={3}
            value={qnObject.op3}
            name={qnObject}
            onChange={onChangeHandle}
          />{" "}
          <label htmlFor={3}>{qnObject.op3}</label>
        </div>
        <div>
          <input
            type="radio"
            id={4}
            value={qnObject.op4}
            name={qnObject}
            onChange={onChangeHandle}
          />{" "}
          <label htmlFor={4}>{qnObject.op4}</label>
        </div>
        <div>
          <input
            type="radio"
            value={qnObject.op5}
            id={5}
            name={qnObject}
            onChange={onChangeHandle}
          />{" "}
          <label htmlFor={5}>{qnObject.op5}</label>
        </div>
      </div>
    </div>
  );
};
export default Question;
