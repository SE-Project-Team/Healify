import React from "react";
import { Header } from "../Home/Header";
import styles from "./ColorGame.module.css";
import { useState } from "react";
import blue from "../../Assets/sounds/blue.mp3";

export const ColorGame = () => {
  let buttonColours = ["red", "blue", "green", "yellow"];

  let gamePattern = [];
  let userClickedPattern = [];

  let started = false;

  const [level, setLevel] = useState(0);
  const [levelTitle, setLevelTitle] = useState("Press A Key Start");
  const [pressedColor, setPressedColor] = useState();

  const start = () => {
    if (!started) {
      let l = level + 1;
      setLevel(() => l);
      setLevelTitle(() => "Level " + l);
      nextSequence();
      started = true;
    }
  };

  const handleClick = (userChosenColour) => {
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  };
  /*

  function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length) {
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
  }
  */

  const nextSequence = () => {
    userClickedPattern = [];
    let l = level + 1;
    setLevel(() => l);
    setLevelTitle(() => "Level " + l);
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // $("#" + randomChosenColour)
    //   .fadeIn(100)
    //   .fadeOut(100)
    //   .fadeIn(100);
    playSound(randomChosenColour);
  };

  function animatePress(currentColor) {
    setPressedColor(currentColor);

    setTimeout(function () {
      setPressedColor("");
    }, 500);
  }

  const playSound = (name) => {
    let audio = new Audio(blue);
    audio.play();
  };

  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }

  return (
    <>
      <Header />
      <div className={styles.maindiv}>
        <h1 className={styles.leveltitle}>{levelTitle}</h1>
        <div className={styles.container}>
          <div className={styles.row}>
            <div
              type="button"
              id="green"
              className={styles.btn + " " + styles.green}
              onclick={() => {
                handleClick(id);
              }}
            ></div>

            <div
              type="button"
              id="red"
              className={styles.btn + " " + styles.red}
              onclick={() => {
                handleClick(id);
              }}
            ></div>
          </div>

          <div classname={styles.row}>
            <div
              type="button"
              id="yellow"
              className={styles.btn + " " + styles.yellow}
              onclick={() => {
                handleClick(id);
              }}
            ></div>
            <div
              type="button"
              id="blue"
              className={styles.btn + " " + styles.blue}
              onclick={() => {
                handleClick(id);
              }}
            ></div>
          </div>
        </div>
        {level == 0 ? <button onClick={start}>Start</button> : null}
      </div>
    </>
  );
};
