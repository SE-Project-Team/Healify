import React from "react";
import image from "../Assets/lady.jpg";
import brainImg from "../Assets/brain.jpg";
import styles from "./Home.module.css";

export const Home = () => {
  return (
    <>
      <header>
        <img className={styles.logo} src={brainImg} />
        <h1 className={styles.heading}>Healify</h1>
        <a className={styles.login} href="">
          Log In
        </a>
      </header>

      <div className="styles.top-container">
        <img className="img" src={image} alt="image not found" />
        <section className="booklist">
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">Play Quiz</h5>
                <div className="card-date">01-10-2021</div>
              </div>
            </div>
            <img className="card-image" src={brainImg} alt="Logo" />
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quibusdam vel hic, aliquam maxime corporis a esse et maiores
              corrupti, soluta cum magnam fuga optio illo iure rerum, assumenda
              harum?
            </div>
          </div>
          <div className="card">
            <div className="card-header">
              <div className="card-title-group">
                <h5 className="card-title">Play Quiz</h5>
                <div className="card-date">01-10-2021</div>
              </div>
            </div>
            <img className="card-image" src={brainImg} alt="Logo" />
            <div className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
              quibusdam vel hic, aliquam maxime corporis a esse et maiores
              corrupti, soluta cum magnam fuga optio illo iure rerum, assumenda
              harum?
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="bottom-container">
          <a
            className="footer-link"
            href="https://twitter.com/iit_tirupati?s=20"
          >
            Twitter
          </a>
          <a className="footer-link" href="https://iittp.ac.in/">
            Website
          </a>
          <p className="copyright">© 2021 IIT Tirupati</p>
        </div>
      </footer>
    </>
  );
};
