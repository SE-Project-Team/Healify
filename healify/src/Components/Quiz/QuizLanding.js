import React, { Component } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import styles2 from "../Home/Home.module.css";
import styles3 from "./QuizLanding.module.css";
import img from "../../Assets/test.png";
import illImg from "../../Assets/ill.jpg";
import phyImg from "../../Assets/physical.jpg";
import controlImg from "../../Assets/control.jpg";
import copingImg from "../../Assets/coping.jpg";

import { Link } from "react-router-dom";
export const QuizLanding = () => {
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
      <div className={styles3.quizBody}>
        <div className={styles3.topDiv}>
          <img src={img} alt="" className={styles3.topDivImg} />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            neque dolor, praesentium quasi repellat dolore molestiae error
            molestias nesciunt placeat deleniti laudantium nulla alias sed
            pariatur vero obcaecati at inventore.
          </p>
        </div>
        <h1 className={styles3.heading}>Take quiz by category</h1>
        <div className={styles3.container}>
          <div className={styles3.category}>
            <Link to="/Quiz1" className={styles2.remove_underline}>
              <img className={styles3.logo} src={illImg} alt="" />
              <p>Ill being and Well being</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/Quiz2" className={styles2.remove_underline}>
              <img className={styles3.logo} src={phyImg} alt="" />
              <p>Control and Coping</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/Quiz3" className={styles2.remove_underline}>
              <img className={styles3.logo} src={controlImg} alt="" />
              <p>Relationships and Belonging</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/Quiz4" className={styles2.remove_underline}>
              <img className={styles3.logo} src={copingImg} alt="" />
              <p>Self Perception</p>
            </Link>
          </div>
        </div>
        <h1 className={styles3.heading}>View statistics by category</h1>
        <div className={styles3.container}>
          <div className={styles3.category}>
            <Link to="/QuizStatistics/1">
              <img className={styles3.logo} src={illImg} alt="" />
              <p>Ill being and Well being</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/QuizStatistics/2">
              <img className={styles3.logo} src={phyImg} alt="" />
              <p>Control and Coping</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/QuizStatistics/3">
              <img className={styles3.logo} src={controlImg} alt="" />
              <p>Relationships and Belonging</p>
            </Link>
          </div>
          <div className={styles3.category}>
            <Link to="/QuizStatistics/4">
              <img className={styles3.logo} src={copingImg} alt="" />
              <p>Self Perception</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
