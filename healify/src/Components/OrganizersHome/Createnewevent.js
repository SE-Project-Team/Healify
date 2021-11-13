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
      <div className={`${createStyles.flexWrapper}`}>
        <Navbar />
        <div className={`${createStyles.wrapper}`}>
          <label htmlFor="eventName">Event Name</label>
          <input type="text" name="eventName" onChange={onChange} />

          <label htmlFor="subtitle">Event Sub Title</label>
          <input type="text" name="subtitle" onChange={onChange} />

          <label htmlFor="description">Event Description</label>
          <textarea name="description" rows="4" cols="50" onChange={onChange} />

          <label htmlFor="">Date</label>

          <button
            onClick={() => {
              setChooseDate(chooseDate ? "" : "true");
            }}
            className={`${createStyles.buttonStyle}`}
          >
            {chooseDate
              ? "Click here to select the Date"
              : `${date ? date.toDateString() : "Please Select a Date"}`}
          </button>
          {chooseDate && <Calendar onChange={setDate} value={date} />}

          <label htmlFor="platforms">Platform For Event</label>
          <input type="text" name={`platforms`} placeholder={`eg: zoom`} />

          <button
            className={`${createStyles.buttonStyle2}`}
            onClick={handleSubmit}
          >
            Create New Event
          </button>
        </div>
      </div>
    </>
  );
};
