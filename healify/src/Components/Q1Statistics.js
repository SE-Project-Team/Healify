import React, { Component } from "react";
import styles from "./Statistics.module.css";
import styles2 from "./Home.module.css";
import logo from "../Assets/mentalhealth_icon_round.png";

export class Q1Statistics extends Component {
  constructor(props) {
    super(props); //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = {
      //state is by default an object
      students: [
        { id: 1, date: "10-10-2021", score: 21, severity: "Very High" },
        { id: 2, date: "11-10-2021", score: 14, severity: "Moderate" },
        { id: 3, date: "15-10-2021", score: 19, severity: "High" },
        { id: 4, date: "18-10-2021", score: 16, severity: "High" },
      ],
    };
  }

  renderTableData() {
    return this.state.students.map((student, index) => {
      const { id, date, score, severity } = student; //destructuring
      return (
        <tr key={id}>
          {/* <td>{id}</td> */}
          <td>{date}</td>
          <td>{score}</td>
          <td>{severity}</td>
        </tr>
      );
    });
  }

  renderTableHeader() {
    let header = ["date", "score", "severity"];
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>;
    });
  }

  render() {
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
        <div>
          <h1 id={styles.title}>Ill being and Well being Statistics</h1>
          <table id={styles.students}>
            <tbody>
              <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}
