import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
const CreateTask = ({ modal, toggle, save }) => {
  const [titleName, setTitleName] = useState("");
  const [Date, setDate] = useState("");
  const [description, setDescription] = useState("");
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
  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["titleName"] = titleName;
    taskObj["Date"] = Date;
    taskObj["Description"] = description;
    save(taskObj);
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
            <label>DD/MM/YYYY</label>
            <input
              type="text"
              className="form-control"
              value={Date}
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
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Save
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};
export default CreateTask;
