import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
const CreateTask = ({ modal, toggle, save }) => {
  const [titleName, setTitleName] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

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

    await axios
      .post(
        "http://localhost:5000/api/v1/milestones/create",
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
        console.log(err.response.data);
      });
    // let taskObj = {};
    // taskObj["titleName"] = titleName;
    // taskObj["Date"] = Date;
    // taskObj["Description"] = description;
    // save(taskObj);
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
            <textarea
              rows="5"
              className="form-control"
              value={description}
              onChange={handleChange}
              name="description"
            ></textarea>
          </div>
        </form>
        <h5>{warning}</h5>
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
