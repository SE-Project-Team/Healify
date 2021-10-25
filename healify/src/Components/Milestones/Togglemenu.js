import React, { useState, useEffect } from "react";
import styles from "./Togglemenu.module.css";
import CreateTask from "../modals/CreateTask";
import * as ReactBootStrap from "react-bootstrap";
import { Link } from "react-router-dom";
export const Togglemenu = ({ createTask }) => {
  const [modal, setModal] = useState(false);
  // const [taskList, setTaskList] = useState([]);
  const toggle = () => setModal(!modal);
  const saveTask = () => {
    createTask();
    setModal(false);
  };
  return (
    <div className={styles.all}>
      <div className={styles.wrapper}>
        <div className={styles.sidebar}>
          <h3>Milestones</h3>
          <ul>
            <Link to="/MilestonesHome">
              <li>
                <a href="#">
                  <i class="fas fa-home"></i>Home
                </a>
              </li>
            </Link>
            <Link to="./Timeline">
              <li>
                <a href="#">
                  <i class="fas fa-address-card"></i>Achievements
                </a>
              </li>
            </Link>
            <li>
              <a href="#">
                <i class="fas fa-blog"></i>About
              </a>
            </li>
          </ul>
          <div className="text-center">
            <li>
              <a href="#">
                <button
                  className="btn btn-primary mt-2"
                  onClick={() => setModal(true)}
                >
                  Create new
                </button>
              </a>
            </li>
          </div>
        </div>
      </div>
      <CreateTask toggle={toggle} modal={modal} save={saveTask} />
    </div>
  );
};
