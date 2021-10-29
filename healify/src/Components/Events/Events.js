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
import { data } from "./data";
import { Header } from "../Home/Header";
import styles from "./Events.module.css";

export const Events = () => {
  return (
    <div className="App">
      <Header />
      <h1 className={styles.heading}>Mental Health Virtual Events</h1>
      <Container>
        <Row xs={3}>
          {data.map((datum) => {
            return (
              <Col>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={datum.imgsrc}
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardTitle tag="h5">{datum.eventname}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Date : {datum.date}
                    </CardSubtitle>
                    <CardText>{datum.description}</CardText>
                    <Link
                      to={{
                        pathname: `${datum.websrc}`,
                      }}
                      target="_blank"
                    >
                      <Button>Register</Button>
                    </Link>
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
