import React from "react";
import eventsstyle from "./Eventsstyle.module.css";
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

export const UpcomingEvents = () => {
  return (
    <div classNameName="App">
      <Header />
      <h1 classNameName={styles.heading}>Mental Health Virtual Events</h1>
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
                    <CardSubtitle tag="h6" classNameName="mb-2 text-muted">
                      Date : {datum.date}
                    </CardSubtitle>
                    <CardText>{datum.description}</CardText>&nbsp;&nbsp;
                    <div className={eventsstyle.ribbon+" " +eventsstyle.red}><span>Registered</span></div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link
                      to={{
                        pathname: `${datum.websrc}`,
                      }}
                      target="_blank"
                    >
                         
                         <button type="button" className="btn btn-primary">&nbsp;&nbsp;&nbsp;View&nbsp;&nbsp;&nbsp;</button>
                    </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                   
                     <Button><i className="fas fa-comment"></i></Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
