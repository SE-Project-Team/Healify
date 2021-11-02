import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import axios from "axios";

import { useHistory } from "react-router";

export const Header = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  const [toggle, setToggle] = useState("");
  const [rotateClass, setRotateClass] = useState("");

  const toggleFunction = () => {
    if (toggle === "") {
      setToggle(styles.toggleActive);
      setRotateClass(styles.rotate);
    } else {
      setToggle("");
      setRotateClass(styles.rotateReset);
    }
  };
  const signOut = () => {
    localStorage.clear();
    setUser("");
    history.replace("/");
  };
  const scrollHandler = () => {
    if (scrollClass === "" && window.scrollY > 80) {
      setScrollClass(styles.whiteHeader);
    } else if (window.scrollY <= 80) {
      setScrollClass("");
    }
  };
  const [scrollClass, setScrollClass] = useState("");
  useEffect(() => {
    // setToggle(toggleFunction());
    window.addEventListener("scroll", scrollHandler);
    // window.addEventListener("resize", toggleFunction);
    const asyncWrapper = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .get("/api/v1/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { username } = res.data.data;
          setUser(username);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    asyncWrapper();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
      // window.removeEventListener("resize", toggleFunction);
    };
  }, []);
  return (
    <header className={styles.header + " " + scrollClass}>
      <div className={`${styles.titleWrapper}`}>
        <div className={styles.threeLineBtn}>
          <ul
            className={`${styles.menuBtnCustom} ${rotateClass}`}
            onClick={toggleFunction}
          >
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <Link to="/" className={styles.remove_underline}>
          <img className={styles.logo} src={logo} alt="logo" />
        </Link>
        <Link to="/" className={styles.remove_underline}>
          <div>
            <h1 className={styles.heading}>Healify</h1>
          </div>
        </Link>
      </div>
      <ul className={"nav " + styles.settingsList + " " + toggle}>
        <Link to="/About" className={styles.remove_underline}>
          <li className={"nav-link"}>About</li>
        </Link>

        {user && (
          <>
            <Link to="/Profile" className={styles.remove_underline}>
              <li className={"nav-link"}>{user}</li>
            </Link>
            <li
              className={styles.navLoginBtn}
              id={styles.navSignUp}
              onClick={signOut}
            >
              Sign Out
            </li>
          </>
        )}
        {!user && (
          <>
            <Link to="/login" className={styles.remove_underline}>
              <li className={styles.navLoginBtn} id={styles.idLoginBtn}>
                Login
              </li>
            </Link>
            <Link to="/Registration" className={styles.remove_underline}>
              <li className={styles.navLoginBtn} id={styles.navSignUp}>
                Sign Up
              </li>
            </Link>
          </>
        )}
      </ul>
    </header>
  );
};
