import e from "cors";
import React from "react";
import emailjs from "emailjs-com";
import emailstyles from "./Email.module.css";
export const Email = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e630rg9",
        "template_k8pk08h",
        e.target,
        "user_qWGvWJS0Y3RuCm6dL7cXk"
      )

      .then(
        (result) => {
          alert("Your message has been sent successfully ! 👍");
        },
        (error) => {
          alert(error.message);
        }
      );
    e.target.reset();
  }
  return (
    <div className={emailstyles.upper}>
      <div className={emailstyles.allabove}>
        <div className={emailstyles.container}>
          <div className={emailstyles["contact-box"]}>
            <div className={emailstyles.left}></div>
            {/* <form className={emailstyles.right} onSubmit={sendEmail}> */}
            <div className={emailstyles.right}>
              <h2>Send Email</h2>
              {/* <input
                type="text"
                className={emailstyles.field}
                placeholder="User Name"
                name="from_name"
              />
              <input
                type="text"
                className={emailstyles.field}
                placeholder="Recipient Name"
                name="to_name"
              />
              <input
                type="text"
                className={emailstyles.field}
                placeholder="Recipient Email"
                name="recipient_email"
              />

              <textarea
                placeholder="Message"
                className={emailstyles.field}
                name="message"
              ></textarea> */}
              <section>
                This is a Random Body For the Email. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Repellendus, facere! Quibusdam,
                temporibus illum modi perspiciatis culpa facere perferendis
                nostrum a! Qui possimus, a nam in molestiae sequi et atque
                praesentium. Lorem ipsum dolor sit amet consectetur, adipisicing
                elit. Voluptas obcaecati doloribus officiis quibusdam ducimus,
                facere vitae fugiat hic architecto. Dolor ducimus itaque culpa
                quod voluptatem, fuga expedita voluptate mollitia possimus?
              </section>
              {/* <button className={emailstyles.btn} type="submit">
                Send
              </button> */}
            </div>

            {/* </form> */}
          </div>
        </div>
      </div>
    </div>
  );
};
