import React from "react";
import styles from "./Home.module.css";
import cardStyles from "./Card.module.css";
import { Link } from "react-router-dom";

export const Card = (props) => {
  const { path, imgSrc, imgAlt, cardName, cardDesc } = props;

  return (
    <Link to={path} className={`${styles.remove_underline} ${styles.homecard}`}>
      <article>
        <section className={cardStyles.imgSection}>
          <img src={imgSrc} alt={imgAlt} />
        </section>
        <section className={cardStyles.textSection}>
          <h2>{cardName}</h2>
          <p>{cardDesc}</p>
        </section>
      </article>
    </Link>
  );
};
