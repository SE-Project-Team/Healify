import React from "react";
import image from "../../Assets/homePage.webp";
import quizimg from "../../Assets/quiz.jpg";
import newsimg from "../../Assets/news.jpg";
import memeimg from "../../Assets/meme.jpg";
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

export const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles["top-container"]}>
          <div className={styles.img}>
            <img src={image} alt="home" />
            {/* <h1 className={styles.banner}>"Life is Beautiful"</h1> */}
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
                      Take our Mental Health Self Assessment Test to know about
                      your mental health. Answer all the questions honestly.
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
                      A good article is like a wholesome healthy meal for your
                      brain and mental well-being. So check out some latest news
                      and feed your brain.
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
                      Watch some wholesome memes and share them with your family
                      and friends.
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
                      Create tasks and mark them as completed upon successful
                      completion. You can see your achievements in the form of a
                      timeline and keep yourselves motivated.
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
      </div>
    </>
  );
};
