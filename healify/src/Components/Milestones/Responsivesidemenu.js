import React from "react";
import styles from "./ResponsiveSidemenu.module.css";
import { Link } from "react-router-dom";
export const Responsivesidemenu =() => {
    return(
        <div className={styles.mybody}>
        <div className={styles["main-menu"]}>
            <br/>
            <br/>
            <br/>
            <br/>
        <ul>
                <Link to="/MilestonesHome"> 
                <li className={styles["menu-item"]}> <a href="#">
                  <i class="fas fa-home"></i> &nbsp; &nbsp;Home
                </a></li>
                </Link>
                <Link to= "/Timeline">
                <li className={styles["menu-item"]}>
                   
                <a href="#">
                  <i class="fas fa-list-alt"></i>&nbsp; &nbsp;&nbsp;Achievements
                </a>
               
                </li>
                </Link>
                  <li className={styles["menu-item"]}>
              <a href="#">
                <i class="fas fa-blog"></i>&nbsp; &nbsp;&nbsp;About
              </a>
            </li>
              
        </ul>
    </div>
        </div>
    );
}