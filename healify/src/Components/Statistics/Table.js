import React, { Component } from "react";

export const Table = (props) => {
  return props.data.map((datum, index) => {
    const { id, date, score, severity } = datum; //destructuring
    return (
      <tr key={id}>
        <td>{date}</td>
        <td>{score}</td>
        <td>{severity}</td>
      </tr>
    );
  });
};
