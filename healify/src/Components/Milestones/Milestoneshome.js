import React , {useEffect, useState} from "react";
import * as ReactBootStrap from "react-bootstrap";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";

import  styles from "./MilestonesHome.module.css";
import  "bootstrap/dist/css/bootstrap.min.css";
export const MilestonesHome = () => {
     const [modal, setModal] = useState(false);
      const [taskList, setTaskList] = useState([])
       useEffect(() => {
        let arr = localStorage.getItem("taskList")
       
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    }, [])

      const deleteTask = (index) => {
        let tempList = taskList
        tempList.splice(index, 1)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(tempList)
        window.location.reload()
    }
     const toggle = () => setModal(!modal);
     
     const saveTask = (taskObj) => {
        let tempList = taskList
        tempList.push(taskObj)
        localStorage.setItem("taskList", JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
        
    }

  return (
     
              <div>
                   <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <ReactBootStrap.Container>
  <ReactBootStrap.Navbar.Brand href="#home">Milestones</ReactBootStrap.Navbar.Brand>
  <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#features"></ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing"></ReactBootStrap.Nav.Link>
      
    </ReactBootStrap.Nav>
    <ReactBootStrap.Nav>
         <ReactBootStrap.Nav.Link href="#deets">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#deets">Achievements</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
        Route Map
      </ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
  </ReactBootStrap.Navbar.Collapse>
  </ReactBootStrap.Container>
</ReactBootStrap.Navbar>
            <div className = {styles.header}>
                <div className = "text-center">
                <h3 className= "mt-"  >Milestones</h3>
                < button className ="btn btn-primary mt-2"  onClick = {() => setModal(true)}>
                    
                    Create Task
                    
                    </button>
        
             </div>
             </div>
             <div className = {styles["task-container"]}>
            {taskList && taskList.map((obj, index) => <Card taskObj = {obj} index = {index} deleteTask = {deleteTask}/>)}
            </div>
             <CreateTask toggle = {toggle} modal = {modal}  save = {saveTask}/>
           </div>
      );
}