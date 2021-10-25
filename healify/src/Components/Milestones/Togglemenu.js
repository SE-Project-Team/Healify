import React, {useState} from "react";
import styles from "./Togglemenu.module.css";
import { Link } from "react-router-dom";
export const Togglemenu = () => {

        
    return(
       <div className={styles.all}>
        <div className={styles.wrapper}>
    <div className={styles.sidebar}>
        <h3>Milestones</h3>
        <ul>
            <Link to="/MilestonesHome">
            <li><a href="#"><i class="fas fa-home"></i>Home</a></li>
            </Link>
            <li><a href="#"><i class="fas fa-user"></i>Profile</a></li>
            <Link to = "./Timeline"> 
            <li><a href="#"><i class="fas fa-address-card"></i>Achievements</a></li>
            </Link>
            <li><a href="#"><i class="fas fa-blog"></i>About</a></li>
    <li><a href="#"><i class="fas fa-address-book"></i>Help</a></li> 
            
        </ul> 
        
    </div>
   </div>

      </div>     
    );
}