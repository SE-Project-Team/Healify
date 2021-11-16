import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import createStyles from "./create.module.css";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { Header } from "../Home/Header";

export const Createnewevent = ({ _id }) => {
  const [eventName, setEventName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [platforms, setPlatforms] = useState("");

  //   Date will automatically be set if u click on it
  const [chooseDate, setChooseDate] = useState("");
  const [date, setDate] = useState(new Date());

  const onChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [warning, setWarning] = useState("");
  return (
    <>
      <Header />
      <div className={createStyles.bodyy}>
        <div className={createStyles.container}>
           <br /><br />
       <div className={createStyles.brandtitle}>Create Event</div>
       <div className={createStyles.inputs}></div>
       
          <label htmlFor="eventName" className={createStyles.clabel}>Event Name</label>
          <input type="text" name="eventName" onChange={onChange}  className={createStyles.cinput} />
          <br /><br />
          <label htmlFor="subtitle" className={createStyles.clabel}>Event Sub Title</label>
          <input type="text" name="subtitle" onChange={onChange}  className={createStyles.cinput}/>
          <br />
          <label htmlFor="description" className={createStyles.clabel}>Event Description</label>
          <textarea name="description" rows="4" cols="50" onChange={onChange}   className={createStyles.ctextarea}/>
           <br />
          <label htmlFor="" className={createStyles.clabel}>Date</label>

          <button className={createStyles.createbtn}
            onClick={() => {
              setChooseDate(chooseDate ? "" : "true");
            }}
            
          >
            {chooseDate
              ? "Click here to select the Date"
              : `${date ? date.toDateString() : "Please Select a Date"}`}
          </button>
          {chooseDate && <Calendar onChange={setDate} value={date} />}
             <br /><br />
          <label htmlFor="platforms" className={createStyles.clabel}>Platform For Event</label>
          <input type="text" name={`platforms`} placeholder={`eg: zoom`} className={createStyles.cinput}/>
         <br /><br />
          <label htmlFor="phone" className={createStyles.clabel}>Contact Number</label>
          <input
             className={createStyles.cinput}
            type="tel"
            id="phone"
            name="phone"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
          />
           <br /><br />
          <button 
           className={createStyles.btn}
            
            onClick={handleSubmit}
          >
            Create New Event
          </button>
        </div>
        </div>
     
    </>
  );
};