import React from "react";
import image from "../../Assets/homePage.webp";
import quizimg from "../../Assets/quiz.jpg";
import newsimg from "../../Assets/news.jpg";
import memeimg from "../../Assets/meme.jpg";
import styles from "./Home.module.css";
import milestoneimg from "../../Assets/milestone.jpg";
import eventsimg from "../../Assets/events.jpg";
import drumkitimg from "../../Assets/drumkit.jpg";
import { Card } from "./Card";
import { Header } from "./Header";
import { useState, useEffect } from "react";
import { QuotesArray } from "./Quotes";

export const Home = () => {
  const [quote1, setQuote1] = useState("Your mental health is a priority");
  const [quote2, setQuote2] = useState(
    "Self care is not a luxury. It's a necessity"
  );
  useEffect(() => {
    let id;
    const asyncWrapper = async () => {
      id = setInterval(() => {
        const index = Math.floor(Math.random() * 6);
        setQuote1(() => {
          return "";
        });
        setQuote1(() => {
          return QuotesArray[index];
        });
        const index2 = Math.floor(Math.random() * 6);
        setQuote2(() => {
          return "";
        });
        setQuote2(() => {
          return QuotesArray[index2];
        });
      }, 10000);
    };
    asyncWrapper();
    return () => {
      clearInterval(id);
    };
  }, []);
  return (
    <>
      <Header />
      <div className={styles.maindiv}>
        <div className={styles.container}>
          <div className={styles["top-container"]}>
            <section className={`${styles.blurImage}`}>
              <div className={styles.img}>
                <img src={image} alt="home" />
                {/* <h1 className={styles.banner}>"Life is Beautiful"</h1> */}
                {quote1 && <h4 className={styles.quote1}>{quote1}</h4>}
                {quote2 && <h4 className={styles.quote2}>{quote2}</h4>}
              </div>
            </section>

            <section className={`${styles.blur}`}>
              <section className={`${styles.mdbCustom}`}>
                <Card
                  path="/QuizLanding"
                  imgSrc={quizimg}
                  alt={"..."}
                  cardName={`Quiz`}
                  cardDesc={`Take our Mental Health Self Assessment Test to know about
        your mental health. Answer all the questions honestly.`}
                />
                <Card
                  path="/News"
                  imgSrc={newsimg}
                  alt={"..."}
                  cardName={`Articles`}
                  cardDesc={`
            A good article is like a wholesome healthy meal for your
            brain and mental well-being. So check out some latest news
            and feed your brain.`}
                />
                <Card
                  path="/Memes"
                  imgSrc={memeimg}
                  alt={"..."}
                  cardName={`Memes`}
                  cardDesc={`Watch some wholesome memes and share them with your family
            and friends.`}
                />
                <Card
                  path="/MilestonesHome"
                  imgSrc={milestoneimg}
                  alt={"..."}
                  cardName={`Milestones`}
                  cardDesc={`Create tasks and mark them as completed upon successful
            completion. You can see your achievements in the form of a
            timeline and keep yourselves motivated.`}
                />
                <Card
                  path="/Events"
                  imgSrc={eventsimg}
                  alt={"..."}
                  cardName={` Virtual Events`}
                  cardDesc={`Explore virtual events on mental health. Register to the
              events and improve your well-being. Rate the events and ask your
              questions in the FAQ section.`}
                />
                <Card
                  path="/Drumkit"
                  imgSrc={drumkitimg}
                  alt={"..."}
                  cardName={`Drumkit`}
                  cardDesc={`Play our drumkit by clicking on the drums or by clicking the 
              keyboard keys. You can also record and download it.`}
                />
              </section>
            </section>
          </div>
        </div>
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
