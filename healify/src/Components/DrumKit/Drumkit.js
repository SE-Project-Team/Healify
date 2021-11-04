import React from "react";
import styles from "./Drumkit.module.css";
import wSound from "../../Assets/sounds/tom-1.mp3";
import aSound from "../../Assets/sounds/tom-2.mp3";
import sSound from "../../Assets/sounds/tom-3.mp3";
import dSound from "../../Assets/sounds/tom-4.mp3";
import jSound from "../../Assets/sounds/snare.mp3";
import kSound from "../../Assets/sounds/crash.mp3";
import lSound from "../../Assets/sounds/kick-bass.mp3";
import { useEffect, useState } from "react";
export const Drumkit = () => {
  // Alternate way -> set State to the letter and evaluate class based on state=== letter && class

  const [w, setW] = useState(false);
  const [a, setA] = useState(false);
  const [s, setS] = useState(false);
  const [d, setD] = useState(false);
  const [j, setJ] = useState(false);
  const [k, setK] = useState(false);
  const [l, setL] = useState(false);

  const handleClick = (key) => {
    makesound(key);
  };

  const keyHandle = (e) => {
    const key = e.key;
    makesound(key);
  };

  useEffect(() => {
    window.addEventListener("keypress", keyHandle);
    return () => {
      window.removeEventListener("keypress", keyHandle);
    };
  }, []);

  const makesound = (key) => {
    let audio;
    switch (key) {
      case "w":
        audio = new Audio(wSound);
        audio.play();
        setW(true);
        setTimeout(() => {
          setW(false);
        }, 100);
        break;

      case "a":
        audio = new Audio(aSound);
        audio.play();
        setA(true);
        setTimeout(() => {
          setA(false);
        }, 100);
        break;

      case "s":
        audio = new Audio(sSound);
        audio.play();
        setS(true);
        setTimeout(() => {
          setS(false);
        }, 100);
        break;

      case "d":
        audio = new Audio(dSound);
        audio.play();
        setD(true);
        setTimeout(() => {
          setD(false);
        }, 100);
        break;

      case "j":
        audio = new Audio(jSound);
        audio.play();
        setJ(true);
        setTimeout(() => {
          setJ(false);
        }, 100);
        break;

      case "k":
        audio = new Audio(kSound);
        audio.play();
        setK(true);
        setTimeout(() => {
          setK(false);
        }, 100);
        break;

      case "l":
        audio = new Audio(lSound);
        audio.play();
        setL(true);
        setTimeout(() => {
          setL(false);
        }, 100);
        break;
      default:
    }
  };

  return (
    <>
      <div className={styles.bdy}>
        <div>
          <h1 className={styles.drumkith1}>Drum 🥁 Kit</h1>
          <div className={`${styles.set} ${styles.drum}`}>
            <button
              className={`${styles.w} ${w && styles.pressed}`}
              onClick={() => {
                handleClick("w");
              }}
            >
              w
            </button>
            <button
              className={`${styles.a} ${a && styles.pressed}`}
              onClick={() => {
                handleClick("a");
              }}
            >
              a
            </button>
            <button
              className={`${styles.s} ${s && styles.pressed}`}
              onClick={() => {
                handleClick("s");
              }}
            >
              s
            </button>
            <button
              className={`${styles.d} ${d && styles.pressed}`}
              onClick={() => {
                handleClick("d");
              }}
            >
              d
            </button>
            <button
              className={`${styles.j} ${j && styles.pressed}`}
              onClick={() => {
                handleClick("j");
              }}
            >
              j
            </button>
            <button
              className={`${styles.k} ${k && styles.pressed}`}
              onClick={() => {
                handleClick("k");
              }}
            >
              k
            </button>
            <button
              className={`${styles.l} ${l && styles.pressed}`}
              onClick={() => {
                handleClick("l");
              }}
            >
              l
            </button>
          </div>
        </div>

        <footer className={styles.drumkitfooter}>
          Made with ❤️ by IIT Tirupati.
        </footer>
      </div>
    </>
  );
};
