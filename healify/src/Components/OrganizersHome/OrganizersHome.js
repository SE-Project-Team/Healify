import React, { createContext, useEffect, useState } from "react";
import image from "../../Assets/pic2.jpg";
import commentimg from "../../Assets/comment.png";
import styles from "../Home/Home.module.css";
import { Card } from "../Home/Card";
import { QuotesArray } from "../Home/Quotes";
import createeventimg from "../../Assets/createevent.png";
export const OrganizersHome = () => {
  const [quote1, setQuote1] = useState("This is a Quote");
  const [quote2, setQuote2] = useState("This is a Quote2");
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
      <div className={styles.container}>
        <div className={styles["top-container"]}>
          <section className={`${styles.OblurImage}`}>
            <div className={styles.img}>
              <img src={image} alt="home" />
              {quote1 && <h4 className={styles.quote1}>{quote1}</h4>}
              {quote2 && <h4 className={styles.quote2}>{quote2}</h4>}
            </div>
          </section>

          <section className={`${styles.mdbCustom}`}>
            <Card
              path="./Createnewevent"
              imgSrc={createeventimg}
              alt={"..."}
              cardName={`Create new event`}
              cardDesc={`Create new event:`}
            />
            <Card
              path="/MyEvents"
              imgSrc="https://www.nicepng.com/png/detail/831-8319932_event-management-event-icon-purple.png"
              alt={"..."}
              cardName={`Events`}
              cardDesc={`Events:`}
            />
          </section>
        </div>
      </div>
    </>
  );
};
export default OrganizersHome;
