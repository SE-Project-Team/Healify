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

export const Events = () => {
  const [events, setEvents] = useState();
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
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const asyncWrapper = async () => {
      await axios
        .get("/api/v1/events/", {
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
      <Container>
        <Row xs={3}>
          {events &&
            events.map((datum) => {
              return (
                <Col key={datum._id}>
                  <Card>
                    <CardImg
                      top
                      width="100%"
                      src={datum.eventImage || imgDef}
                      alt="Card image cap"
                    />
                    <CardBody>
                      <CardTitle tag="h5">{datum.eventName}</CardTitle>
                      <CardSubtitle tag="h6" className="mb-2 text-muted">
                        Date : {datum.date}
                      </CardSubtitle>
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
                      <button
                        type="button"
                        className="btn btn-outline-danger"
                        onClick={() => {
                          markInterested(datum._id);
                        }}
                      >
                        Mark As Interested
                      </button>
                    </CardBody>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
  );
};
