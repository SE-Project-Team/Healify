import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";

import logo from "../Assets/mentalhealth_icon_round.png";
import styles from "./Statistics.module.css";
import styles2 from "./Home.module.css";

export const Q4Statistics = () => {
  return (
    <>
      <header className={styles2.header}>
        <div className={styles2.threeLineBtn}>
          <ul className={styles2.menuBtnCustom}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className={styles2.logo} src={logo} />
        <div>
          <h1 className={styles2.heading}>Healify</h1>
        </div>
        <ul className={"nav " + styles2.settingsList}>
          <li className={"nav-link"}>About</li>
          <li className={"nav-link"}>Contact Us</li>
          <li className={"nav-link"}>Profile</li>
          <li className={styles2.navLoginBtn} id={styles2.idLoginBtn}>
            Login
          </li>
          <li className={styles2.navLoginBtn} id={styles2.navSignUp}>
            Sign Up
          </li>
        </ul>
      </header>
      <h1 style={{ textAlign: "center", padding: "10px" }}>
        Self Perception Statistics
      </h1>
      <div style={{ margin: "auto", maxWidth: "1000px", padding: "50px" }}>
        <Bar
          data={{
            // Name of the variables on x-axies for each bar
            labels: ["10-10-2021", "12-10-2021", "15-10-2021", "18-10-2021"],
            datasets: [
              {
                // Label for bars
                label: "Self Assessment Test Score",
                // Data or value of your each variable
                data: [20, 22, 18, 15],
                // Color of each bar
                backgroundColor: ["aqua", "green", "red", "yellow"],
                // Border color of each bar
                borderColor: ["aqua", "green", "red", "yellow"],
                borderWidth: 0.5,
              },
            ],
          }}
          // Height of graph
          height={400}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    // The y-axis value will start from zero
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 15,
              },
            },
          }}
        />
      </div>
    </>
  );
};
