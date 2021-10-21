import React from "react";
import timelineData from "./Data";
import TimelineItem from "./Timelineitem";
import * as ReactBootStrap from "react-bootstrap";
import  styles from "./Timeline.module.css";
import { Link } from "react-router-dom";
 export const Timeline = () =>
 <div>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">Milestones</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#features"></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
           <Link to="/MilestonesHome">
            <li className={styles.navLoginBtn} id={styles.navSignUp}>
              Home
            </li>
          </Link>
          <Link to="/Timeline">
            <li className={styles.navLoginBtn} id={styles.navSignUp}>
              Achievements
            </li>
          </Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
 <div className={styles.over}>
        
        <div className={styles["timeline-container"]}>
            
            {timelineData.map((Data, idx) => (
        
                <TimelineItem Data={Data} key={idx} />
            ))}
        </div>
        </div>
    </div>
    timelineData.length > 0 && (
         
        <div className={styles.over}>
        
        <div className={styles["timeline-container"]}>
            
            {timelineData.map((Data, idx) => (
        
                <TimelineItem Data={Data} key={idx} />
            ))}
        </div>
        </div>
    );
  export default Timeline;