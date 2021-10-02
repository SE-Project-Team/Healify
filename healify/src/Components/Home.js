import React from "react";
import image from "../Assets/lady.jpg";
import brainImg from "../Assets/brain.jpg";
import logo from "../Assets/mentalhealth_icon_round.png";
import quizimg from "../Assets/quiz.jpg";
import newsimg from "../Assets/news.jpg";
import memeimg from "../Assets/meme.jpg";
import gameimg from "../Assets/games.jpg";
import statsimg from "../Assets/stats.jpg";
import styles from "./Home.module.css";
import milestoneimg from "../Assets/milestone.jpg";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

export const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <img className={styles.logo} src={logo} />
        <h1 className={styles.heading}>Healify</h1>
        <a className={styles.login} href="">
          Log In
        </a>
      </header>

      <br />
      <div className={styles["top-container"]}>
        <img className={styles.img} src={image} alt="image not found" />
        <MDBRow className="row-cols-1 row-cols-md-4 g-4">
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={quizimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Quiz</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={newsimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Articles</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={memeimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Memes</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={gameimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Games</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={statsimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Statistics</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={milestoneimg} alt="..." position="top" />
              <MDBCardBody>
                <MDBCardTitle>Milestones</MDBCardTitle>
                <MDBCardText>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </div>

      <footer>
        {" "}
        <div className={styles["bottom-container"]}>
          <a
            className={styles["footer-link"]}
            href="https://twitter.com/iit_tirupati?s=20"
          >
            Twitter
          </a>
          <a className={styles["footer-link"]} href="https://iittp.ac.in/">
            Website
          </a>
          <p className={styles.copyright}>© 2021 IIT Tirupati</p>
        </div>
      </footer>
    </>
  );
};
