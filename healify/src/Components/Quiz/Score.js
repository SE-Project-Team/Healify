import React, { Component } from "react";

export const Score = (props) => {
  const score = props.score;
  return (
    <>
      <h1> Your score is {score}</h1>
    </>
  );
};
