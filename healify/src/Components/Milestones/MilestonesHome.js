import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import CreateTask from "../modals/CreateTask";
import EditTask from "../modals/EditTask";
import Card from "./Card";
import { Link } from "react-router-dom";
import { Togglemenu } from "./Togglemenu";
import styles from "./MilestonesHome.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Responsivesidemenu1 } from "./Responsivesidemenu1";
import axios from "axios";
import { Header } from "../Home/Header";

export const MilestonesHome = ({ createTask }) => {
  const [taskList, setTaskList] = useState([]);
  const [modal, setModal] = useState(false);

  // const [taskList, setTaskList] = useState([]);
  const toggle = () => setModal(!modal);
  const saveTask = () => {
    createTask();
    setModal(false);
  };
  const updatePage = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .get("/api/v1/milestones", {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        const activeMilestones = res.data.data;
        const newActiveMilestones = activeMilestones.map((each) => {
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
        console.log(err);
      });
  };

  useEffect(() => {
    const asyncwrapper = async () => {
      await updatePage();
    };
    asyncwrapper();
  }, []);

  const deleteTask = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .post(
        "/api/v1/milestones/delete",
        {
          milestoneID: _id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then(async (res) => {
        console.log(res.data);
        await updatePage();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateTask = () => {
    updatePage();
  };

  return (
    <div>
      <Header />
      <article className={styles.flexWrapper}>
        <Responsivesidemenu1 createTask={updateTask} />
        <div className={styles["task-container"]}>
          {taskList &&
            taskList.map((obj, index) => (
              <Card
                key={obj._id}
                _id={obj._id}
                taskObj={obj}
                index={index}
                deleteTask={() => deleteTask(obj._id)}
                updateTask={updateTask}
              />
            ))}
        </div>
      </article>
    </div>
  );
};
