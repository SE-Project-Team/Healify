import React from "react";
import timelineData from "./Data";
import TimelineItem from "./Timelineitem";
import * as ReactBootStrap from "react-bootstrap";
import styles from "./Timeline.module.css";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";

export const Timeline = () => {
  const [taskList, setTaskList] = useState([]);

  const updatePage = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .get("http://localhost:5000/api/v1/milestones/timeline", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const milestones = res.data.data;
        const newActiveMilestones = milestones.map((each) => {
          // For some reason db is inserting previous day -> default time == midnight issue??
          // Are mongoose and js considering 00 time as different days??
          // console.log(each.targetDate);

          // But this method is returning value to proper date
          let newDate = new Date(each.targetDate);
          newDate = newDate.toString().slice(0, 15);

          return {
            ...each,
            targetDate: newDate,
          };
        });
        setTaskList(newActiveMilestones);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
  useEffect(() => {
    const asyncWrapper = async () => {
      console.log("calling");
      await updatePage();
    };
    asyncWrapper();
  }, []);

  return (
    <div>
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Container>
          <ReactBootStrap.Navbar.Brand href="#home">
            Milestones
          </ReactBootStrap.Navbar.Brand>
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
      {taskList && (
        <div className={styles.over}>
          <div className={styles["timeline-container"]}>
            {taskList.map((each) => (
              <TimelineItem Data={each} key={each._id} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default Timeline;
