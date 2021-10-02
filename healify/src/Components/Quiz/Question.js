import React from "react";

const Question = ({ que, op1, op2, op3, op4, op5 }) => {
  return (
    <div>
      <div>
        <h1>{que}</h1>
        <h4>{op1}</h4>
        <h4>{op2}</h4>
        <h4>{op3}</h4>
        <h4>{op4}</h4>
        <h4>{op5}</h4>
      </div>
    </div>
  );
};
export default Question;
