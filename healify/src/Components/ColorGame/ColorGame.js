import { StylesProvider } from "@material-ui/core";
import React from "react";
import { Header } from "../Home/Header";
import styles from "./ColorGame.module.css";

export const ColorGame = () => {
  return (
    <>
      <Header />
      <div className={styles.maindiv}>
        <h1 className={styles.leveltitle}>Press A Key to Start</h1>
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              type="button"
              id="green"
              className={styles.btn + " " + styles.green}
            ></div>

            <div
              type="button"
              id="red"
              className={styles.btn + " " + styles.red}
            ></div>
          </div>

          <div classname={styles.row}>
            <div
              type="button"
              id="yellow"
              className={styles.btn + " " + styles.yellow}
            ></div>
            <div
              type="button"
              id="blue"
              className={styles.btn + " " + styles.blue}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};
