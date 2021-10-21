import React, { Component } from "react";

export const TableHeader = () => {
  let header = ["date", "score", "severity"];
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};
