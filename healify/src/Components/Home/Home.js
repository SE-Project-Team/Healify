import React from "react";
import image from "../../Assets/homePage.webp";
import quizimg from "../../Assets/quiz.jpg";
import newsimg from "../../Assets/news.jpg";
import memeimg from "../../Assets/meme.jpg";
import gameimg from "../../Assets/games.jpg";
import statsimg from "../../Assets/stats.jpg";
import styles from "./Home.module.css";
import milestoneimg from "../../Assets/milestone.jpg";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Header } from "./Header";

const vector2 = "/src/Assets/TrialVector.png";

export const Home = () => {
  return (
    <>
      <Header />
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
              <Link to="/QuizLanding" className={styles.remove_underline}>
                <MDBCardBody>
                  <MDBCardTitle>Quiz</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={newsimg} alt="..." position="top" />
              <Link to="/News" className={styles.remove_underline}>
                <MDBCardBody>
                  <MDBCardTitle>Articles</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </MDBCol>
          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={memeimg} alt="..." position="top" />
              <Link to="/Memes" className={styles.remove_underline}>
                <MDBCardBody>
                  <MDBCardTitle>Memes</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </MDBCol>
          {/* <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={gameimg} alt="..." position="top" />
              <Link to="/Games">
                <MDBCardBody>
                  <MDBCardTitle>Games</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </Link>
            </MDBCard>
          </MDBCol> */}

          <MDBCol>
            <MDBCard className={styles.homecard}>
              <MDBCardImage src={milestoneimg} alt="..." position="top" />
              <Link to="/MilestonesHome" className={styles.remove_underline}>
                <MDBCardBody>
                  <MDBCardTitle>Milestones</MDBCardTitle>
                  <MDBCardText>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </MDBCardText>
                </MDBCardBody>
              </Link>
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
