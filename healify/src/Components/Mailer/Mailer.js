import React from "react";
import { Header } from "../Home/Header";
import emailjs from "emailjs-com";
import axios from "axios";
import { Email } from "./Email";
import ContactHome from "./ContactHome";
import styles from "./Email.module.css";

export const Mailer = () => {
  // const sendEmail = (e) => {
  //   const token = JSON.parse(localStorage.getItem("token"));

  //   e.preventDefault();
  //   // emailjs
  //   //   .sendForm(
  //   //     "service_wuyqli6",
  //   //     "template_po855sn",
  //   //     e.target,
  //   //     "user_eaglXsDsWq6chMZ7XTrDP"
  //   //   )
  //   //   .then((res) => {
  //   //     console.log(res);
  //   //   })
  //   //   .catch((err) => console.log(err));
  //   axios
  //     .post(
  //       "/api/v1/mailer/",
  //       {},
  //       {
  //         headers: {
  //           authorization: `Bearer ${token}`,
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       console.log("success? ", res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       console.log(err.response);
  //     });
  // };
  // return (
  //   <>
  //     <Header />
  //     <div
  //       className="container border"
  //       style={{
  //         marginTop: "50px",
  //         width: "50%",
  //         backgroundImage: `url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=626&ext=jpg')`,
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //       }}
  //     >
  //       <h2
  //         style={{
  //           marginTop: "25px",
  //           textAlign: "center",
  //           fontFamily: "cursive",
  //         }}
  //       >
  //         Send Email
  //       </h2>
  //       <form
  //         className="row"
  //         style={{ margin: "25px 85px 75px 100px" }}
  //         onSubmit={sendEmail}
  //       >
  //         {/*<label style={{fontFamily:"cursive",fontWeight:"bold"}}>User Name</label>
  //       <input type="text" name="from_name" className="form-control" />*/}
  //         <i className="fa fa-user">
  //           <label style={{ fontFamily: "cursive", fontWeight: "bold" }}>
  //             User Name
  //           </label>
  //         </i>
  //         <input type="text" name="to_name" className="form-control" />
  //         <br />
  //         <br />
  //         {/*  <label  style={{fontFamily:"cursive"}}>User Email</label>
  //       <input type="email" name="user_email" className="form-control" />*/}
  //         <i className="fa fa-envelope">
  //           <label style={{ fontFamily: "cursive", fontWeight: "bold" }}>
  //             Email
  //           </label>
  //         </i>
  //         <input type="email" name="recipient_email" className="form-control" />
  //         <br />
  //         <br />
  //         <i className="fas fa-pencil">
  //           <label style={{ fontFamily: "cursive" }}>Message</label>{" "}
  //         </i>
  //         <textarea name="message" rows="4" className="form-control" />

  //         <input
  //           type="submit"
  //           value="SEND"
  //           className="form-control btn btn-primary"
  //           style={{
  //             marginTop: "40px",
  //             fontFamily: "cursive",
  //             fontWeight: "bold",
  //           }}
  //         />
  //       </form>
  //     </div>
  //   </>
  // );

  return (
    <div className={`${styles.wrapperDiv}`}>
      <Email />
      <ContactHome />
    </div>
  );
};

export default Mailer;
