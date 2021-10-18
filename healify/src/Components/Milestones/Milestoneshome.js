import React from "react";
import styles from "./Milestoneshome.module.css";
import * as ReactBootStrap from "react-bootstrap";
export const Milestoneshome = () => {
  return (
    <div>
      <div>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
        >
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="/home">
              Milestones
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto">
                <ReactBootStrap.Nav.Link href="/features"></ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link href="/pricing"></ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/deets">
                  Achievements
                </ReactBootStrap.Nav.Link>
                <ReactBootStrap.Nav.Link eventKey={2} href="/memes">
                  Route Map
                </ReactBootStrap.Nav.Link>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
      <h2 className="text-center">Welcome to Milestones</h2>
      <section className={styles["details-card"]}>
        <div className={styles.container}>
          <div className="row">
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>February 25 2019</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>January 19 1999</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>December 15 2017</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>February 25 2019</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>January 19 1999</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className={styles["card-content"]}>
                <div className={styles["card-desc"]}>
                  <h2>TITLE</h2>
                  <hr />
                  <h3>December 15 2017</h3>

                  <p>Finally i achieved my dream goal</p>
                  <a href="#" className={styles["btn-card"]}>
                    Mark as done
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
