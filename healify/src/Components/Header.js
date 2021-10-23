import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../Assets/mentalhealth_icon_round.png";

export const Header = () => {
  const scrollHandler = () => {
    if (scrollClass === "" && window.scrollY > 100) {
      setScrollClass(styles.whiteHeader);
    } else if (window.scrollY <= 100) {
      setScrollClass("");
    }
  };
  const [scrollClass, setScrollClass] = useState("");
  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {};
  }, []);
  return (
    <header className={styles.header + " " + scrollClass}>
      <div className={styles.threeLineBtn}>
        <ul className={styles.menuBtnCustom}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <img className={styles.logo} src={logo} />
      <div>
        <h1 className={styles.heading}>Healify</h1>
      </div>
      <ul className={"nav " + styles.settingsList}>
        <Link to="/About">
          <li className={"nav-link"}>About</li>
        </Link>
        <Link to="/Profile">
          <li className={"nav-link"}>Profile</li>
        </Link>
        <Link to="/login">
          <li className={styles.navLoginBtn} id={styles.idLoginBtn}>
            Login
          </li>
        </Link>
        <Link to="/Registration">
          <li className={styles.navLoginBtn} id={styles.navSignUp}>
            Sign Up
          </li>
        </Link>
      </ul>
    </header>
  );
};
