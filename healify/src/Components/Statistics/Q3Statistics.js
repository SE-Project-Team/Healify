import React, { Component } from "react";
import styles from "./Statistics.module.css";
import styles2 from "../Home.module.css";
import logo from "../../Assets/mentalhealth_icon_round.png";
import { Table } from "./Table";
import { TableHeader } from "./TableHeader";
import { useState, useEffect } from "react";
import axios from "axios";
import { Header } from "../Header";
export const Q3Statistics = ({ quizId }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  // const queryString = "quizId=" + quizId;
  useEffect(async () => {
    await axios
      .get(`http://localhost:5000/api/v1/quiz/statistics?quizId=3`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const { scoreArr } = res.data.data;
        console.log(scoreArr);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);
  const [data, setData] = useState([
    { id: 1, date: "10-10-2021", score: 21, severity: "Very High" },
    { id: 2, date: "11-10-2021", score: 14, severity: "Moderate" },
    { id: 3, date: "15-10-2021", score: 19, severity: "High" },
    { id: 4, date: "18-10-2021", score: 16, severity: "High" },
  ]);

  return (
    <>
      <Header />
      <div>
        <h1 id={styles.title}>Relationships and Belonging Statistics</h1>
        <table id={styles.students}>
          <tbody>
            <tr>
              <TableHeader />
            </tr>
            <Table data={data} />
          </tbody>
        </table>
      </div>
    </>
  );
};
