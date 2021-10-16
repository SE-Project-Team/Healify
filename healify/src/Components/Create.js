import React from "react";
import styles from "./Create.module.css";
export const Create = () => {
  return (
     <div className={styles.note}>
  <h2>Milestones </h2>
  <div className={styles["note-input"]}>
    <h3>Add A New Milestone</h3>
    <div className={styles["note-wrapper"]}>
      <input type="text" id = {styles["note-title"]} placeholder="DD-MM-YYYY of your achievement"/>
       <input type="text" id = {styles["note-title"]} placeholder="Title of your achievement"/>
      <textarea  id={styles["note-content"]} placeholder="Describe your achievement...." rows="6"></textarea>
        <input type="text" id = {styles["note-title"]} placeholder="Awards/Memorables if any"/>
      <button id={styles["add-note-btn"]} className={styles.btn} type = "button" >
        <span><i className={styles["fas fa-plus"]}></i></span>
        Add New
      </button>
    </div>
  </div>
  
  <div className={styles["note-list"]}>
    <div className={styles["note-item"]}>
        <h3>My Achievement</h3>
        <button id={styles["add-note-btn"]} className={styles["btn"]} type="button">
    <span><i className={styles["fas fa-trash"]}></i></span>
    Delete 
  </button>
    </div>
     
  </div>
  
  <button type="button" className = {styles.btn} id= {styles["delete-all-btn"]}>
    <span><i className={styles["fas fa-trash"]}></i></span>
    Delete All
  </button>
</div>
    
      );
}