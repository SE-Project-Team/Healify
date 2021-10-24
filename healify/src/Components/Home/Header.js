import React from "react";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import logo from "../../Assets/mentalhealth_icon_round.png";
import axios from "axios";

import { useHistory } from "react-router";

export const Header = () => {
  const [user, setUser] = useState("");
  const history = useHistory();

  const signOut = () => {
    localStorage.clear();
    history.push("/login");
  };
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
    const asyncWrapper = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .get("http://localhost:5000/api/v1/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const { username } = res.data.data;
          setUser(username);
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    };
    asyncWrapper();
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
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
      <Link to="/" className={styles.remove_underline}>
        <img className={styles.logo} src={logo} />
      </Link>
      <Link to="/" className={styles.remove_underline}>
        <div>
          <h1 className={styles.heading}>Healify</h1>
        </div>
      </Link>
      <ul className={"nav " + styles.settingsList}>
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
