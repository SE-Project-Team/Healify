import React from "react";
import emailstyles from "./Email.module.css";
export const Email = ({
  maxLimit,
  message,
  messageTemplate,
  setMessageTemplate,
}) => {
  return (
    <div className={emailstyles.upper}>
      <div className={emailstyles.allabove}>
        <div className={emailstyles.container}>
          <div className={emailstyles["contact-box"]}>
            <div className={emailstyles.left}></div>
            {/* <form className={emailstyles.right} onSubmit={sendEmail}> */}
            <div className={emailstyles.right}>
              <h2>Send Email</h2>

              <section className={`${emailstyles.messageBodyContainer}`}>
                <i
                  href="#"
                  class="previous round"
                  onClick={() => {
                    if (messageTemplate > 0)
                      setMessageTemplate((prev) => prev - 1);
                  }}
                >
                  &#8249;
                </i>

                <section>{message}</section>
                <i
                  href="#"
                  class="next round"
                  onClick={() => {
                    if (messageTemplate < maxLimit - 1)
                      setMessageTemplate((prev) => prev + 1);
                  }}
                >
                  &#8250;
                </i>
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
