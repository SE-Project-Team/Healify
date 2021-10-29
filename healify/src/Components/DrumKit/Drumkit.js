import React from "react";
import styles from "./Drumkit.module.css";

export const Drumkit = () => {
  var numberOfDrumButtons = document.querySelectorAll(".drum").length;

  for (var i = 0; i < numberOfDrumButtons; i++) {
    //we are adding event listeners to the array of elements with the class drum using the loop
    //so that whenever any of those are clicked we can perform an action
    document
      .querySelectorAll(".drum")
      [i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
      });
  }

  document.addEventListener("keypress", function (event) {
    var key = event.key;
    makesound(key);
    buttonAnimation(key);
  });

  function makesound(key) {
    switch (key) {
      case "w":
        var audio = new Audio("../../Assets/sounds/tom-1.mp3");
        audio.play();
        break;

      case "a":
        var audio = new Audio("../../Assets/sounds/tom-2.mp3");
        audio.play();
        break;

      case "s":
        var audio = new Audio("../../Assets/sounds/tom-3.mp3");
        audio.play();
        break;

      case "d":
        var audio = new Audio("../../Assets/sounds/tom-4.mp3");
        audio.play();
        break;

      case "j":
        var audio = new Audio("../../Assets/sounds/snare.mp3");
        audio.play();
        break;

      case "k":
        var audio = new Audio("../../Assets/sounds/crash.mp3");
        audio.play();
        break;

      case "l":
        var audio = new Audio("../../Assets/sounds/kick-bass.mp3");
        audio.play();
        break;
      default:
    }
  }

  function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }

  return (
    <>
      <div className={styles.bdy}>
        <div>
          <h1 className={styles.drumkith1}>Drum 🥁 Kit</h1>
          <div className={styles.set}>
            <button className={styles.w + " " + styles.drum}>w</button>
            <button className={styles.a + " " + styles.drum}>a</button>
            <button className={styles.s + " " + styles.drum}>s</button>
            <button className={styles.d + " " + styles.drum}>d</button>
            <button className={styles.j + " " + styles.drum}>j</button>
            <button className={styles.k + " " + styles.drum}>k</button>
            <button className={styles.l + " " + styles.drum}>l</button>
          </div>
        </div>

        <footer className={styles.drumkitfooter}>
          Made with ❤️ by Sahithi Rani.
        </footer>
      </div>
    </>
  );
};
