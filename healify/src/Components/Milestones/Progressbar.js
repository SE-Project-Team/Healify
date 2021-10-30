import React from "react";
import  styles from "./Progressbar.module.css";
export const Progressbar=() =>{
    return(
       
           
             <div className={styles.progress}>
                            <div className="progress-bar" role="progressbar" style={{width: "70%", height:"65%" , backgroundColor:"#4ae34a"}}  aria-valuenow ="70" aria-valuemin="0" aria-valuemax="100"> 72% </div>
                        </div>
       
    );
}
export default Progressbar;