import React from "react";
import image1 from "../Assets/image1.png";
import logo1 from "../Assets/mentalhealth_icon_round.png";
import "./Signup.css";
export const Signup = () => {
  return (
    <div className="container px-4 py-5 mx-auto">
      <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <div className="row justify-content-center px-3 mb-3">
                  <img id="logo" src={logo1} alt="logo1" />{" "}
                </div>
                <h3 className="mb-5 text-center heading">Welcome again!</h3>
                <div className="form-group">
                  <label className="form-control-label text-muted">
                    Username
                  </label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                  />{" "}
                </div>
                <div className="form-group">
                  {" "}
                  <label className="form-control-label text-muted">
                    Password
                  </label>
                  <input
                    type="password"
                    id="psw"
                    name="psw"
                    placeholder="Password"
                    className="form-control"
                  />{" "}
                </div>
                <div className="row justify-content-center my-3 px-3">
                  {" "}
                  <button className="btn-block btn-color">
                    Login to Healify
                  </button>{" "}
                </div>
                <div className="row justify-content-center my-2">
                  {" "}
                  <a href="#">
                    <small className="text-muted">Forgot Password?</small>
                  </a>{" "}
                </div>
              </div>
            </div>
            <div className="bottom text-center mb-5">
              <p href="#" className="sm-text mx-auto mb-3">
                Don't have an account?
                <button className="btn btn-white ml-2">Create new</button>
              </p>
            </div>
          </div>
          <div className="card card2">
            <div className="my-auto mx-md-5 px-md-5 right">
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
