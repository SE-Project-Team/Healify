import React from "react";
import styles from "./Milestones.module.css";
export const Milestones = () => {
  return (
      <div>
         <div className={styles["sidebar-container"]}>
           
  <div className={styles["sidebar-logo"]}  >
    Milestones
  </div>
  
  <ul className={styles["sidebar-navigation"]}>
    <li className={styles.header}>Navigation</li>
    <li>
      <a href="#">
        <i className="styles.fa fa-home" aria-hidden="true"></i> Homepage
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Create New
      </a>
      
    </li>
    <li>
      <a href="#">
        <i className="fa fa-tachometer" aria-hidden="true"></i> Achievements 
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-tachometer" aria-hidden="true" ></i> Route Map
      </a>
    </li>
    <li className={styles.header}>Another Menu</li>
    <li>
      <a href="#">
        <i className="fa fa-cog" aria-hidden="true"></i> Settings
      </a>
    </li>
    <li>
      <a href="#">
        <i className="fa fa-info-circle" aria-hidden="true"></i> Information
      </a>
    </li>
  </ul>
</div>
  

      </div>
      );

}