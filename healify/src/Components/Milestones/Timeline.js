import React from "react";
import TimelineItem from "./Timelineitem";
import * as ReactBootStrap from "react-bootstrap";
import styles from "./Timeline.module.css";
import { Link } from "react-router-dom";
import { Header } from "../Home/Header";
import { Togglemenu } from "./Togglemenu";
import { useState, useEffect } from "react";
import { Responsivesidemenu } from "./Responsivesidemenu";
import axios from "axios";
export const Timeline = () => {
  const [taskList, setTaskList] = useState([]);

  const updatePage = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .get("/api/v1/milestones/timeline", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const milestones = res.data.data;
        const newActiveMilestones = milestones.map((each) => {
          // For some reason db is inserting previous day -> default time == midnight issue??
          // Are mongoose and js considering 00 time as different days??

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
        console.log(err);
      });
  };
  useEffect(() => {
    const asyncWrapper = async () => {
      await updatePage();
    };
    asyncWrapper();
  }, []);

  return (
    <div>
      <Header />
      <Responsivesidemenu />
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
