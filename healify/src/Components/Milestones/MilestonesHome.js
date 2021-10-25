import React, { useEffect, useState } from "react";
import * as ReactBootStrap from "react-bootstrap";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { Link } from "react-router-dom";
import {Togglemenu } from "./Togglemenu";
import styles from "./MilestonesHome.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import axios from "axios";
import { Header } from "../Home/Header";

export const MilestonesHome = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const updatePage = async () => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .get("http://localhost:5000/api/v1/milestones", {
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
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    const asyncwrapper = async () => {
      await updatePage();
    };
    asyncwrapper();
  }, [modal]);

  const deleteTask = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .post(
        "http://localhost:5000/api/v1/milestones/delete",
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
        console.log(err.response.data);
      });
  };
  const toggle = () => setModal(!modal);

  const saveTask = () => {
    setTaskList(taskList);
    setModal(false);
  };

  const updateTask = () => {
    updatePage();
  };

  return (
    <div>
      <Header />
     <Togglemenu />
      
      <div className={styles.heading}>
        <div className="text-center">
          <button
            className="btn btn-primary mt-2"
            onClick={() => setModal(true) } >
             <i class="fa fa-plus" aria-hidden="true"></i>
              Create Task
            
             
          </button>
        </div>
      </div>
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
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};
