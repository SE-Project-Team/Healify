import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import modalStyles from "./modal.module.css";

import axios from "axios";
const CreateTask = ({ modal, toggle, save }) => {
  const [titleName, setTitleName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  // Trying to add Subtasks
  const [subtasks, setSubtasks] = useState([]);

  const subTaskHandle = (e) => {
    // console.log("Entered Event");
    // Check for enter Key and TargetName => apparently description state is not working here
    if (e.keyCode === 13 && e.target.name === "description") {
      if (!e.target.value) {
        setWarning("Sub Task Cannot be empty");
        setTimeout(() => {
          setWarning("");
        }, 2000);
        return;
      }
      const newSubTask = { task: `+ ${e.target.value}`, completed: false };
      // console.log(newSubTask);
      setSubtasks((currentState) => {
        return [...currentState, newSubTask];
      });
      setDescription("");
    }
  };

  useEffect(() => {
    setSubtasks([{ task: "Do something" }, { task: "Do something" }]);
    window.addEventListener("keyup", subTaskHandle);
    return () => {
      window.removeEventListener("keyup", subTaskHandle);
    };
  }, []);

  // End of Subtasks
  const [warning, setWarning] = useState("");

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "titleName") {
      setTitleName(value);
    } else if (name === "description") {
      setDescription(value);
    } else {
      setDate(value);
    }
  };
  const handleSave = async (e) => {
    e.preventDefault();
    if (!titleName || !date || !description) {
      setWarning("All fields are required");
      setTimeout(() => {
        setWarning("");
      }, 2000);
      return;
    }

    const targetDate = new Date(date);
    if (targetDate == "Invalid Date") {
      setWarning("Date is Invalid");
      setTimeout(() => {
        setWarning("");
      }, 2000);
      return;
    }
    const token = JSON.parse(localStorage.getItem("token"));
    if (!token) {
      setWarning("Please Log in First");
      setTimeout(() => {
        setTitleName("");
        setDate("");
        setDescription("");
        setWarning("");
        save();
      }, 2000);

      return;
    }
    await axios
      .post(
        "/api/v1/milestones/create",
        {
          title: titleName,
          targetDate,
          description,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setTitleName("");
        setDate("");
        setDescription("");
        save();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setTitleName("");
    setDate("");
    setDescription("");
    toggle();
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create New</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label>Title Name</label>
            <input
              type="text"
              className="form-control"
              value={titleName}
              onChange={handleChange}
              name="titleName"
            />
          </div>
          <div className="form-group">
            <label>MM/DD/YYYY</label>
            <input
              type="text"
              className="form-control"
              value={date}
              onChange={handleChange}
              name="Date"
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            {subtasks.length &&
              subtasks.map((each) => {
                return (
                  <h5 className={`${modalStyles.subtask}`}>{each.task}</h5>
                );
              })}
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>

        {warning && <h5 className={modalStyles.warning}>{warning}</h5>}
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={resetForm}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreateTask;
