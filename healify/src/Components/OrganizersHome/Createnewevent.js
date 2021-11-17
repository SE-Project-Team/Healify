import React from "react";
import Calendar from "react-calendar";
import { useState } from "react";
import createStyles from "./create.module.css";
import "react-calendar/dist/Calendar.css";
import Navbar from "./Navbar";
import { Header } from "../Home/Header";
import axios from "axios";
import { useHistory } from "react-router";

export const Createnewevent = () => {
  const [eventName, setEventName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [description, setDescription] = useState("");
  const [platform, setPlatform] = useState("");
  const [phone, setPhone] = useState();
  //   Date will automatically be set if u click on it
  const [chooseDate, setChooseDate] = useState("");
  const [date, setDate] = useState(new Date());
  const [link, setLink] = useState("");

  const [warning, setWarning] = useState("SAY MY NAME");
  const history = useHistory();
  const displayWarning = async (msg) => {
    setWarning(msg);
    setTimeout(() => {
      setWarning("");
    }, 3000);
  };

  const handleSubmit = async (e) => {
    const token = JSON.parse(localStorage.getItem("token"));
    e.preventDefault();
    const notExists =
      !eventName || !subtitle || !description || !platform || !phone || !date;
    if (notExists) {
      displayWarning("Please Enter All Fields");
      return;
    }

    if (date < date.now()) {
      displayWarning("Please Make Sure That You Have Given A Valid Date");
    }

    // Possibly jst check validity of phone number
    await axios
      .post(
        "/api/v1/organizer/create-event",
        {
          eventName,
          subtitle,
          description,
          date,
          platform,
          contactNo: phone,
          link: link,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
        }
      });
    history.push("/organizer");
  };

  return (
    <>
      <Header />
      <div className={`${createStyles.flexWrapper}`}>
        <Navbar />
        <div className={createStyles.bodyy}>
          <div className={createStyles.container}>
            <br />
            <br />
            <div className={createStyles.brandtitle}>Create Event</div>
            <div className={createStyles.inputs}></div>

            <label htmlFor="eventName" className={createStyles.clabel}>
              Event Name
            </label>
            <input
              type="text"
              name="eventName"
              onChange={(e) => {
                setEventName(e.target.value);
              }}
              className={createStyles.cinput}
              value={eventName}
            />
            <br />
            <br />
            <label htmlFor="subtitle" className={createStyles.clabel}>
              Event Sub Title
            </label>
            <input
              type="text"
              name="subtitle"
              onChange={(e) => {
                setSubtitle(e.target.value);
              }}
              value={subtitle}
              className={createStyles.cinput}
            />
            <br />
            <label htmlFor="description" className={createStyles.clabel}>
              Event Description
            </label>
            <textarea
              name="description"
              rows="4"
              cols="50"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              className={createStyles.ctextarea}
              value={description}
            />
            <br />
            <label htmlFor="" className={createStyles.clabel}>
              Date
            </label>

            <button
              className={createStyles.createbtn}
              onClick={() => {
                setChooseDate(chooseDate ? "" : "true");
              }}
            >
              {chooseDate
                ? "Click here to select the Date"
                : `${date ? date.toDateString() : "Please Select a Date"}`}
            </button>
            {chooseDate && <Calendar onChange={setDate} value={date} />}
            <br />
            <br />
            <label htmlFor="platform" className={createStyles.clabel}>
              Platform For Event
            </label>
            <input
              type="text"
              name={`platform`}
              placeholder={`eg: zoom platform`}
              className={createStyles.cinput}
              value={platform}
              onChange={(e) => {
                setPlatform(e.target.value);
              }}
            />
            <br />
            <br />
            <label htmlFor="phone" className={createStyles.clabel}>
              Contact Number
            </label>
            <input
              className={createStyles.cinput}
              type="tel"
              id="phone"
              name="phone"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              required
            />
            <br />
            <br />
            <label htmlFor="link" className={createStyles.clabel}>
              Link To External Site if Any{" "}
            </label>
            <input
              type="text"
              name={`link`}
              className={createStyles.cinput}
              value={link}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
            <br />
            <br />
            {warning && <h4 className={createStyles.warning}>{warning}</h4>}
            <button className={createStyles.btn} onClick={handleSubmit}>
              Create New Event
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
