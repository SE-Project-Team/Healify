import React from "react";
import image from "../Assets/homePage.webp";
import logo from "../Assets/mentalhealth_icon_round.png";
import vector from "../Assets/Trial2.png";
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
const vector2 = "/src/Assets/TrialVector.png";
export const Home = () => {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.threeLineBtn}>
          <ul className={styles.menuBtnCustom}>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <img className={styles.logo} src={logo} />
        <div>
          <h1 className={styles.heading}>Healify</h1>
        </div>
        <ul className={"nav " + styles.settingsList}>
          <li className={"nav-link"}>About</li>
          <li className={"nav-link"}>Contact Us</li>
          <li className={"nav-link"}>Profile</li>
          <li className={styles.navLoginBtn} id={styles.idLoginBtn}>
            Login
          </li>
          <li className={styles.navLoginBtn} id={styles.navSignUp}>
            Sign Up
          </li>
        </ul>
      </header>

      <div className={styles["top-container"]}>
        <div className={styles.img}>
          <img src={image} alt="home-image" />
          <h1 className={styles.banner}>"Life is Beautiful"</h1>
        </div>
        <MDBRow
          className={
            "row-cols-1 row-cols-md-4 row-cols-sm-2 g-4 " + styles.mdbCustom
          }
        >
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
