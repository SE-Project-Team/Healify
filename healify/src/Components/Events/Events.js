/*

Code For Events Page As seen by a regular user
Not To be mistaken for similar page meant for event organizers

*/

import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import { data } from "../Events/data";
import { Header } from "../Home/Header";
import styles from "./Events.module.css";
import imgDef from "../../Assets/user.png";
import { useHistory } from "react-router";

import { ReadMore } from "../Milestones/ReadMore";

import { useState, useEffect } from "react";
import axios from "axios";

export const Events = (props) => {
  const [events, setEvents] = useState();

  const [rowItems, setRowItems] = useState(3);
  const [pageIsInterested, setPageIsInterested] = useState(props.markedEvents);
  const history = useHistory();

  const markInterested = async (_id) => {
    const token = JSON.parse(localStorage.getItem("token"));

    await axios
      .post(
        "/api/v1/events/favourites",
        {
          eventId: _id,
        },
        {
          headers: {
            authorization: `Bearer ${token}`,
          },
        }
      )
      .catch((err) => {
        if (err.response) {
          console.log(err.response.body);
        }
      });
  };
  const resizeWrapper = () => {
    if (window.innerWidth < 500) {
      setRowItems(1);
    } else if (window.innerWidth < 800) {
      setRowItems(2);
    } else {
      setRowItems(3);
    }
  };
  useEffect(() => {
    resizeWrapper();
    window.addEventListener("resize", resizeWrapper);
  }, []);
  useEffect(() => {
    // console.log(markedEvents);
    const token = JSON.parse(localStorage.getItem("token"));
    const url = pageIsInterested
      ? "/api/v1/events/favourites"
      : "/api/v1/events/";
    const asyncWrapper = async () => {
      await axios
        .get(url, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          // Can Do Better Here
          const allEvents = res.data.data;
          allEvents.sort((a, b) => {
            return a.date < b.date ? 1 : -1;
          });
          setEvents(allEvents);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.body);
          }
        });
    };
    asyncWrapper();
  }, []);
  return (
    <div className="App">
      <Header />
      <h1 className={styles.heading}>Mental Health Virtual Events</h1>
      <article className={`${styles.articleContainer}`}>
        <section xs={rowItems} className={`${styles.sectionContainer}`}>
          {events &&
            events.map((datum) => {
              return (
                <section key={datum._id} className={`${styles.cardContainer}`}>
                  <div className={`${styles.cardSubContainer}`}>
                    <div className={`${styles.imgContainer}`}>
                      <img
                        width="100%"
                        top
                        src={datum.eventImage || imgDef}
                        alt="Card image cap"
                      />
                    </div>

                    <div className={`${styles.cardInfo}`}>
                      <div>{datum.eventName}</div>
                      <div className="mb-2 text-muted">Date : {datum.date}</div>
                      {/* <CardText>{datum.description}</CardText> */}
                      <div>
                        <ReadMore>{datum.description}</ReadMore>
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => {
                          history.push(`/userEventView${datum._id}`);
                        }}
                      >
                        View
                      </button>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      {!pageIsInterested && (
                        <button
                          type="button"
                          className="btn btn-outline-danger"
                          onClick={() => {
                            markInterested(datum._id);
                          }}
                        >
                          Mark As Interested
                        </button>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
        </section>
      </article>
    </div>
  );
};
