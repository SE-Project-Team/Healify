import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";

import styles from "./Signup.module.css";
import image1 from "../../Assets/image1.png";
import logo1 from "../../Assets/mentalhealth_icon_round.png";

import axios from "axios";
import { postLogin } from "./SignUpUtilityFn";
import { Link } from "react-router-dom";

export const Registration = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [rePassword, setRePassword] = useState("");

  const [warning, setWarning] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let value = 1;
    if (password != rePassword) {
      setWarning("Re-entered password is not matching");
      setTimeout(() => setWarning(""), 2000);
      return;
    }
    await axios
      .post("http://localhost:5000/api/v1/registration/", {
        username,
        email,
        password,
      })
      .catch((err) => {
        // Rejected or error response
        const { msg } = err.response.data;
        value = 0;
        // Example for warning
        setWarning(msg);
        setTimeout(() => setWarning(""), 2000);
        return;
        // depending on msg we should handle warning message to user (like showing Dom elements)
      });
    if (value) {
      const loginParams = { username, password, setWarning, setToken, history };
      postLogin(loginParams);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "username") {
      setUsername(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "rePassword") {
      setRePassword(value);
    }
  };

  return (
    <div className={"px-4 py-5 mx-auto container " + styles.container}>
      <div className={styles.card + " " + styles.card0}>
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className={styles.card + " " + styles.card1}>
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                  <img id={styles.logo} src={logo1} alt="logo1" />{" "}
                </div>
                <h3 className={"mb-5 text-center " + styles.heading}>
                  Create Account
                </h3>
                <div className="form-group">
                  <label className={"text-muted " + styles.formControlLabel}>
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    value={username}
                    onChange={handleChange}
                  />{" "}
                </div>

                <div className="form-group">
                  <label className={"text-muted " + styles.formControlLabel}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="Email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    value={email}
                    onChange={handleChange}
                  />{" "}
                </div>
                <div className="form-group">
                  {" "}
                  <label className={"text-muted " + styles.formControlLabel}>
                    Password
                  </label>
                  <input
                    type="password"
                    id="psw"
                    name="password"
                    placeholder="Password"
                    className="form-control"
                    value={password}
                    onChange={handleChange}
                  />{" "}
                </div>

                <div className="form-group">
                  <label className={"text-muted " + styles.formControlLabel}>
                    Re-enter Password
                  </label>
                  <input
                    type="text"
                    id="Re-enter Password"
                    name="rePassword"
                    placeholder="Re-enter Password"
                    className="form-control"
                    type="password"
                    value={rePassword}
                    onChange={handleChange}
                  />{" "}
                </div>

                <br />
                {/* <input type="checkbox" className="checkbox" required="" /> */}
                {/* <span> I Agree To The Terms & Conditions</span> */}

                <div className="row justify-content-center my-3 px-3">
                  <button
                    className={"btn-block " + styles.btnColor}
                    onClick={handleSubmit}
                  >
                    Sign up
                  </button>
                  <h4>{warning}</h4>
                </div>
                <div className="row justify-content-center my-2">
                  {" "}
                  <Link to="/login">
                    <small className="text-muted">
                      Redirect back to Login Page
                    </small>
                  </Link>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.card + " " + styles.card2}>
            <div className={"my-auto mx-md-5 px-md-5 right" + styles.right}>
              <div>
                <img
                  className="rounded mx-auto d-block"
                  src={image1}
                  alt="image1"
                  width="450px"
                  height="280px"
                />
              </div>
              <br />
              <br />
              <div>
                <h3 className="text-white text-center mb-5">Healify</h3>{" "}
              </div>
              <div>
                <small className="text-white">
                  Dealing with mental health is what makes us human. But for a
                  lot of us, it's a struggle to be open about it. Even if we are
                  open about it, there is a global shortage of psychiatrists and
                  lack of mental health care access in rural regions. In this
                  context, we feel our website can serve as a viable tool to
                  bridge the mental health treatment gap. Our app serves as a
                  user feedback system for self-management of every individual
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
