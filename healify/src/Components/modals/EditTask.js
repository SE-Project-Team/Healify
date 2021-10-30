import React, { useState, useEffect } from "react";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const month_map = {
  Jan: 1,
  Feb: 2,
  Mar: 3,
  Apr: 4,
  May: 5,
  Jun: 6,
  Jul: 7,
  Aug: 8,
  Sep: 9,
  Oct: 10,
  Nov: 11,
  Dec: 12,
};

export const EditTask = ({ _id, modal, toggle, taskObj, save, selected ,setSelected }) => {
  
  
  const [temp, setTemp]=useState(0);
  const [titleName, setTitleName] = useState(taskObj.title);
  const [date, setDate] = useState(taskObj.targetDate);
  const [description, setDescription] = useState(taskObj.description);
  
 
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
  function Assign(str){
    if(str==="Not Completed")
    {
     setTemp(0);
     console.log("temp in edit task " +temp);
    }
     else if(str==="Task Completed")
     {
     setTemp(1);
      console.log("temp in edit task " +temp);
    
     }
     else
     {
     setTemp(2);
      console.log("temp in edit task " +temp);
      
     }
  }
 
  useEffect(() => {
    const arr = taskObj.targetDate.split(" ");
    const dateStr = `${month_map[arr[1]]}/${arr[2]}/${arr[3]}`;

    setTitleName(taskObj.title);
    setDate(dateStr);
    setDescription(taskObj.description);
  }, []);

  const handleUpdate = async (e) => {
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
      .patch(
        "/api/v1/milestones/edit",
        {
          milestoneId: _id,
          title: titleName,
          targetDate,
          description,
          completed: false,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        save();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Update Task</ModalHeader>
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

         <select value={selected} onChange={e=>setSelected(e.target.value)}>
  <option selected value={1}  >Task Completed</option>
    <option value={0}  >Not completed</option>
  <option value={2}  >Partially completed</option>

</select>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Update
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    
    </Modal>
  );
};
export default EditTask;
