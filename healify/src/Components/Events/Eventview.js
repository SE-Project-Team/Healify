import React from "react";
import {
  Card,
  Segment,
  Grid,
  Icon,
  Button,
  Dimmer,
  Loader,
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import styles from "./Eventview.module.css";
import userpng from "../../Assets/user.png";
import { comment } from "./comments_data";
import { annoouncement, announcement } from "./announcements_data";
import { Header } from "../Home/Header";
import { ReadMore } from "../Milestones/ReadMore";
import eventsstyle from "../OrganizersHome/Eventsstyle.module.css";
import { useParams } from "react-router-dom";
import imgDef from "../../Assets/user.png";
import { CreateAnnouncement } from "../modals/CreateAnnouncement";
import { CreateReview } from "../modals/CreateReview";
import { useState, useEffect } from "react";
import axios from "axios";

export const Eventview = (props) => {
  const [event, setEvent] = useState();

  const [role, setRole] = useState(props.role);
  const { id } = useParams();

  const [addAnnounce, setAddAnnounce] = useState(false);

  const toggle = () => {
    setAddAnnounce((prevState) => !prevState);
  };

  const [addReview, setAddReview] = useState(false);

  const toggleReview = () => {
    setAddReview((prevState) => !prevState);
  };

  // useEffect(() => {
  //   const asyncWrapper = async () => {
  //     const token = JSON.parse(localStorage.getItem("token"));
  //     await axios
  //       .get("/api/v1/", {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then((res) => {
  //         const { role } = res.data.data;
  //         setRole(role);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   };
  //   asyncWrapper();
  // }, []);
  useEffect(() => {
    const asyncWrapper = async () => {
      const token = JSON.parse(localStorage.getItem("token"));
      await axios
        .get(`/api/v1/events/event?eventId=${id}`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res.data.data);
          console.log(res.data.data.reviews);

          setEvent(res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response);
          }
        });
    };
    asyncWrapper();
  }, [addAnnounce]);

  return (
    <>
      <Header />
      {event && (
        <div className={styles.EventBody}>
          <h2 className={styles.heading}>Event View</h2>
          <div className={styles.Eventcontainer3}>
            <div>
              <section className={styles.firstSection}>
                <div
                  className={`${styles.Eventcontainer} ${styles.nullMargin}`}
                >
                  <h4 className={styles.counter}>{event.eventName}</h4>
                  <div>
                    <form action="" className={styles.img}>
                      <img
                        src={event.eventImage || imgDef}
                        alt="https://media.istockphoto.com/photos/paper-brain-and-heart-tree-world-heart-day-world-mental-health-day-picture-id1272715286?b=1&k=20&m=1272715286&s=170667a&w=0&h=z-N-PMBZcCH22mG33_AIY3Vr29nTMaUOyzBa4V8i85Y="
                        width="1050px"
                      />
                    </form>
                  </div>
                  <button type="button" class="btn btn-danger">
                    {event.status}
                  </button>
                </div>
                <div
                  className={`${styles.Eventcontainer} ${styles.nullMargin}`}
                >
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="info" />
                    &nbsp;&nbsp;&nbsp;Attend the webinar on Mental Health
                    Awareness to know more about Mental Health
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="info" />
                    &nbsp;&nbsp;Subtitle : {event.subtitle}
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="info" />
                    &nbsp;&nbsp;Description Of the event :{" "}
                    <ReadMore>{event.description}</ReadMore>
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="calendar alternate outline" />
                    &nbsp;&nbsp;Date and time : {event.date}
                    <br />
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="map marker alternate" />
                    &nbsp;&nbsp;Platform : {event.platform}
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="map marker alternate" />
                    &nbsp;&nbsp;Link To Main Site : {event.link}
                  </div>
                  <div className={styles.Eventcontainer2}>
                    {" "}
                    <Icon color="teal" name="map marker alternate" />
                    &nbsp;&nbsp;ContactNo : {event.contactNo}
                  </div>
                </div>
              </section>

              <div className={styles.Eventcontainer}>
                <Segment
                  inverted
                  size="large"
                  color="teal"
                  style={{ marginBottom: 0 }}
                >
                  <section className={`${styles.announcementSection}`}>
                    <h2 textAlign="center">Announcements </h2>
                    {role === "organizer" && (
                      <h4 id={`${styles.addAnnBtn}`} onClick={toggle}>
                        Click Here To Add Announcement
                      </h4>
                    )}
                  </section>
                </Segment>
                <div>
                  {announcement.map((props) => {
                    return (
                      <>
                        {" "}
                        <div className={styles.Eventcontainer2}>
                          <a class="ui orange right ribbon label">
                            {props.Date}
                          </a>
                          <ReadMore>{props.announcement}</ReadMore>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* <div>
              <div
                className={styles.Eventcontainer}
                style={{ marginBottom: 0 }}
              ></div>
            </div> */}
          </div>
          <Segment
            inverted
            size="large"
            color="teal"
            style={{ marginBottom: 0 }}
          >
            <section className={`${styles.announcementSection}`}>
              <h2 textAlign="center">Talk about event</h2>
              {role === "user" && (
                <h4 id={`${styles.addAnnBtn}`} onClick={toggleReview}>
                  Click Here To add a Review{" "}
                </h4>
              )}
            </section>

            <a class="ui red right ribbon label" onClick={toggleReview}>
              Reviews
            </a>
          </Segment>
          <div>
            {comment.map((props) => {
              return (
                <>
                  <div className={styles.Eventcontainer3}>
                    <div>
                      <div style={{ fontWeight: "bold" }}>
                        {" "}
                        {props.username}
                      </div>
                      <div>
                        {" "}
                        <ReadMore>{props.comment}</ReadMore>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
      {addAnnounce && (
        <CreateAnnouncement
          modal={addAnnounce}
          toggle={toggle}
          eventId={event._id}
        />
      )}
      {addReview && (
        <CreateReview
          modal={addReview}
          toggle={toggleReview}
          eventId={event._id}
        />
      )}
    </>
  );
};
