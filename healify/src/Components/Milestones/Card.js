import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import ConfirmDialog from "./ConfirmDialog";
import styles from "./MilestonesHome.module.css";
const Card = ({ _id, taskObj, index, deleteTask, updateTask }) => {
  const { title, description, targetDate } = taskObj;
  const [modal, setModal] = useState(false);
   const [confirmDialog, setConfirmDialog] = useState({ isOpen: false, title: '', subTitle: '' })

  const colors = [
    {
      primaryColor: "#7FFFD4",
      secondaryColor: "#00FFFF",
    },
    {
      primaryColor: "#FF1493",
      secondaryColor: "#FF00FF",
    },
    {
      primaryColor: "#98FB98",
      secondaryColor: "#00FA9A",
    },
    {
      primaryColor: "#800080",
      secondaryColor: "#DDA0DD",
    },
    {
      primaryColor: "#FFD700",
      secondaryColor: "#F0E68C",
    },
  ];

  const toggle = () => {
    setModal(!modal);
  };

  const handleDelete = () => {
     setConfirmDialog({
            ...confirmDialog,
            isOpen: false
        })
    deleteTask(index);
    
  };
  const saveTask = () => {
    setModal(false);
    updateTask();
  };
  return (
    <div className={styles["card-wrapper"] + " mr-2"}>
      <div
        className={styles["card-top"]}
        style={{ "background-color": colors[index % 5].primaryColor }}
      ></div>
      <div className={styles["task-holder"]}>
        <span
          className={styles["card-header"]}
          style={{
            "background-color": colors[index % 5].secondaryColor,
            "border-radius": "15px",
          }}
        >
          {title}
        </span>
        <h6 className="mt-1">{targetDate}</h6>
        <p className="mt-2">{description}</p>
        <br />
        <div style={{ position: "absolute", right: "20px", bottom: "20px" }}>
          <i
            class="far fa-edit  "
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            onClick={() => setModal(true)}
          ></i>
        </div>
        <div style={{ position: "absolute", right: "50px", bottom: "20px" }}>
          <i
            class="fas fa-trash-alt"
            style={{ color: colors[index % 5].primaryColor, cursor: "pointer" }}
            /*{onClick={handleDelete}}*/
             onClick={() => {
                                                setConfirmDialog({
                                                    isOpen: true,
                                                    title: 'Are you sure to delete this task?',
                                                    subTitle: "You can't undo this operation",
                                                    onConfirm: ()=> {
                                                      handleDelete()
                                                    }
                                                })
                                            }}
          ></i>
        </div>
        <EditTask
          _id={_id}
          modal={modal}
          toggle={toggle}
          taskObj={taskObj}
          save={saveTask}
        />
      </div>
      <ConfirmDialog
      confirmDialog={confirmDialog}
                setConfirmDialog={setConfirmDialog}
      />
    </div>
  );
};
export default Card;
