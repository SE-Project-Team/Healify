import React from "react";
import { Header } from "../Home/Header";
import styles from "./ColorGame.module.css";
import { useState, useEffect } from "react";
import blue from "../../Assets/sounds/blue.mp3";

export const ColorGame = () => {
  let buttonColours = ["red", "blue", "green", "yellow"];

  const [gamePattern, setGamePattern] = useState([]);
  const [userClickedPattern, setUserClickedPattern] = useState([]);

  const [started, setStarted] = useState(false);

  const [level, setLevel] = useState(0);
  const [pressedColor, setPressedColor] = useState();

  const [levelPassed, setLevelPassed] = useState("");
  const [generated, setGenerated] = useState("");

  useEffect(() => {}, [generated]);

  const start = () => {
    if (!started) {
      nextSequence();
      setStarted(true);
    }
  };

  const handleClick = (userChosenColour) => {
    if (generated) {
      return;
    }
    const newUserClickedPattern = [...userClickedPattern, userChosenColour];
    setUserClickedPattern(() => {
      return newUserClickedPattern;
    });

    playSound(userChosenColour);

    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  };

  const checkAnswer = (currentLevel) => {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length - 1) {
        setLevelPassed("true");

        setTimeout(() => {
          setLevelPassed("");
          nextSequence();
        }, 2000);
      }
    } else {
      playSound("wrong");
      setLevelPassed("false");

      setTimeout(() => {
        setLevelPassed("");
      }, 2000);

      startOver();
    }
  };

  const nextSequence = () => {
    setUserClickedPattern(() => {
      return [];
    });
    setGamePattern(() => {
      return [];
    });
    let l = level + 1;
    setLevel(() => l);

    let newGamePattern = [];
    for (let i = 0; i < 4; i++) {
      let randomNumber = Math.floor(Math.random() * 4);
      let randomChosenColour = buttonColours[randomNumber];
      newGamePattern.push(randomChosenColour);
      setTimeout(() => {
        setGenerated(() => {
          return randomChosenColour;
        });
        playSound(randomChosenColour);
        if (i != 3) {
          setTimeout(() => {
            setGenerated(() => "reset");
          }, 500);
        } else {
          setTimeout(() => {
            setGenerated(() => "");
          }, 500);
        }
      }, 1000 * (i + 1));

      setGenerated(() => "");
      setGamePattern(() => {
        return newGamePattern;
      });
    }

    console.log("What is this", newGamePattern);
  };

  const animatePress = (currentColor) => {
    setPressedColor(currentColor);

    setTimeout(() => {
      setPressedColor("");
    }, 500);
  };

  const playSound = (name) => {
    let audio = new Audio(blue);
    audio.play();
  };

  const startOver = () => {
    setLevel(0);
    setGamePattern([]);
    setStarted(false);
  };

  return (
    <>
      <Header />

      <div className={styles.maindiv}>
        {(levelPassed === "true" && (
          <h1 className={`${styles.pass}`}>Level Passed</h1>
        )) ||
          (levelPassed === "false" && (
            <h1 className={`${styles.pass}`}>Level Failed!! Game Over</h1>
          )) || (
            <section>
              <h1 className={styles.leveltitle}>
                {(!level && "Press Button To start") || `Level ${level}`}
              </h1>

              <div className={styles.container}>
                <div className={styles.row}>
                  <div
                    type="button"
                    id="green"
                    className={`${styles.btn} ${styles.green} ${
                      pressedColor === "green" && styles.pressed
                    } ${generated === "green" && styles.animateFade}`}
                    onClick={() => {
                      handleClick("green");
                    }}
                  ></div>

                  <div
                    type="button"
                    id="red"
                    className={`${styles.btn} ${styles.red}  ${
                      pressedColor === "red" && styles.pressed
                    } ${generated === "red" && styles.animateFade}`}
                    onClick={() => {
                      handleClick("red");
                    }}
                  ></div>
                </div>

                <div classname={styles.row}>
                  <div
                    type="button"
                    id="yellow"
                    className={`${styles.btn} ${styles.yellow} ${
                      pressedColor === "yellow" && styles.pressed
                    } ${generated === "yellow" && styles.animateFade}`}
                    onClick={() => {
                      handleClick("yellow");
                    }}
                  ></div>
                  <div
                    type="button"
                    id="blue"
                    className={`${styles.btn} ${styles.blue} ${
                      pressedColor === "blue" && styles.pressed
                    } ${generated === "blue" && styles.animateFade}`}
                    onClick={() => {
                      handleClick("blue");
                    }}
                  ></div>
                </div>
              </div>
            </section>
          )}
        {level == 0 ? <button onClick={start}>Start</button> : null}
      </div>
    </>
  );
};
