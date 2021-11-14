import React from "react";
import { Header } from "../Home/Header";
import styles from "./ColorGame.module.css";

export const ColorGame = () => {
  /*
  var buttonColours = ["red", "blue", "green", "yellow"];

  var gamePattern = [];
  var userClickedPattern = [];

  var started = false;
  var level = 0;

  $(document).keypress(function () {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

  $(".btn").click(function () {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length - 1);
  });

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

  function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour)
      .fadeIn(100)
      .fadeOut(100)
      .fadeIn(100);
    playSound(randomChosenColour);
  }

  function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }

  function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
  }

  function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
  }
  */

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
