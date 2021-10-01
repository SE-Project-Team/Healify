import React from "react";
import image from "../Assets/lady.jpg";
import brainImg from "../Assets/brain.jpg";

export const Home = () => {
  return (
    <>
      <header>
        <img className="logo" src={brainImg} />
        <h1 className="heading">Healify</h1>
        <a className="login" href="">
          Log In
        </a>
      </header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navv">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link disabled"
                  href="#"
                  tabIndex="-1"
                  aria-disabled="true"
                >
                  Disabled
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>

      <div className="top-container">
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
