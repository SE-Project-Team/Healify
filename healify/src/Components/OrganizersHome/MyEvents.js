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
import styles from "../Events/Events.module.css";
import imgDef from "../../Assets/user.png";
import { useHistory } from "react-router";

import { useState, useEffect } from "react";
import axios from "axios";

export const MyEvents = () => {
  const [events, setEvents] = useState();
  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    const asyncWrapper = async () => {
      await axios
        .get("/api/v1/organizer/", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          setEvents(res.data.data);
        })
        .catch((err) => {
          if (err.response) {
            console.log(err.response.body);
          }
        });
    };
    asyncWrapper();
  });
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
                  <Card
                    onClick={() => {
                      history.push(`/eventview${datum._id}`);
                    }}
                  >
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
                      <CardText>{datum.description}</CardText>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Link
                        to={{
                          pathname: `${datum.link}`,
                        }}
                        target="_blank"
                      >
                        <button type="button" class="btn btn-primary">
                          &nbsp;&nbsp;&nbsp;&nbsp;View&nbsp;&nbsp;&nbsp;&nbsp;
                        </button>
                      </Link>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="button" class="btn btn-outline-danger">
                        Cancel Event
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
