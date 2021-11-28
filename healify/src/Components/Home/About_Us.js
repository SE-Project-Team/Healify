import React from "react";
import aboutstyles from "./About_us.module.css";
import { Header } from "./Header";
export const About_Us = () => {
  return (
    <>
      <Header />
      <div className={aboutstyles.aboutmain}>
        <div className={aboutstyles.header}>
          <h2>A SHORT GUIDE TO HEALIFY</h2>
        </div>
        <header className={aboutstyles.heading}>
          <div className={aboutstyles.added}>
        <h2>ABOUT HEALIFY</h2>
        </div>
        </header>

        {/* <h5>Milestones</h5> */}
        <div className={aboutstyles.fakeimg}>
          Dealing with mental health is what makes us human. But for a lot of
          us, it's a struggle to be open about it. Even if we are open about it,
          there is a global shortage of psychiatrists and lack of mental health
          care access in rural regions s. In this context, we feel that apps can
          serve as a viable tool to bridge the mental health treatment gap. Our
          app serves as a User feedback system for self-management and
          maintaining good mental health of every individual. This app
          encourages Users to maintain their milestones records so that they can
          focus on what is important. We intend this to be a part of their
          self-care task so that Users feel active. The web-app provides an
          option to read good news articles and some wholesome memes for
          recreation. This app can be revisited every day, to keep oneself
          occupied with his goals and not fall into the stress holes created by
          the world around him.{" "}
          {/* <img clasName={aboutstyles.imagestyle}  src="https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg" /> */}
        </div>

         <header className={aboutstyles.heading}>
          <div className={aboutstyles.added}>
        <h2>ROLES</h2>
        </div>
        </header>
        {/* <h2>Roles</h2> */}
        {/* <h5>Milestones</h5> */}
        <div className={aboutstyles.fakeimg}>
          <b>Primary User:</b>
          <p>
            Healify tries to monitor mental health through well-detailed quizzes
            and tries to keep the User active and positive through various
            activities. To avail these services one may register as a{" "}
            <b>User</b> in the signup page.
          </p>
          <br />
          <b>Event Organizer:</b>
          <p>
            An Event Organizer can market virtual events, conferences and
            related activities through the Events Section of healify. To do this
            one must register as an <b>organizer</b> in the signup page.
          </p>
          {/* <img clasName={aboutstyles.imagestyle}  src="https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg" /> */}
        </div>

<header className={aboutstyles.heading}>
          <div className={aboutstyles.added}>
        <h2>Guide for primary User</h2>
        </div>
        </header>
        <div className={aboutstyles.row}>

          
            {/* <header className={aboutstyles.heading}>
          <div className={aboutstyles.added}>
        <h2>Guide for primary User</h2>
        </div>
         </header> */}
          <div className={aboutstyles.fakeimg}>
            <b>Quiz Page:</b>
            <p>
              Healify tries to monitor mental health through well-detailed
              quizzes and tries to keep the User active and positive through
              various activities. To avail these services one may register as a{" "}
              <b>User</b> in the signup page.
            </p>
            <br />
            <b>Milestones:</b>
            <p>
              The primary User can create a new milestone set the target date add subtasks edit 
              delete subtasks and milestones.To do
              this one must register as an <b>Primary User</b> in the signup page.
            </p>

            <b>Articles:</b>
            <p>
             The primary User can get suggested articles , they can also
             search for news articles, get to know more information. To do
              this one must register as an <b>primary User</b> in the signup page.
            </p>

            <b>Events:</b>
            <p>
              An Event Organizer can market virtual events, conferences and
              related activities through the Events Section of healify. To do
              this one must register as an <b>organizer</b> in the signup page.
            </p>
            <b>Need To Talk?:</b>
            <p>
             The Primary User can save contact names and emails ,select a message template,
             and can sent that message to one of cotacts in contactlist . To do
              this one must register as an <b>Primary User</b> in the signup page.
            </p>
            <b>Memes and Other Activities:</b>
            <p>
             The primary User can watch different memes share them with their family and friends. To do
              this one must register as an <b>Primary User</b> in the signup page.
            </p>
            {/* <img clasName={aboutstyles.imagestyle}  src="https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg" /> */}
          </div>
        </div>

        <div className={aboutstyles.row}>
           <header className={aboutstyles.heading}>
          <div className={aboutstyles.added}>
       <h2>Guide for Event Organizer</h2>
        </div>
         </header>
         
          <div className={aboutstyles.fakeimg}>
            <b>Create Event:</b>
            <p>
              Healify tries to monitor mental health through well-detailed
              quizzes and tries to keep the User active and positive through
              various activities. To avail these services one may register as a{" "}
              <b>User</b> in the signup page.
            </p>
            <br />
            <b>Manage Events:</b>
            <p>
              An Event Organizer can market virtual events, conferences and
              related activities through the Events Section of healify. To do
              this one must register as an <b>organizer</b> in the signup page.
            </p>
          </div>
        </div>
        <div className={aboutstyles.row}>
          {/* <div className={aboutstyles.leftcolumn}>
          <div className={aboutstyles.card}>
            <h2 className={aboutstyles.h2} style={{ color: "skyblue" }}>
              Quiz
            </h2>

            <div className={aboutstyles.fakeimg}>
              Through our app Users can take the mental health self-assessment
              test daily or weekly. This test section comprises of 4 categories
              namely Ill being and well being, control and coping, Relationships
              and belonging and self perception. After completing the test, the
              app gives score report of in the respective category. Based on
              these results, the Users can understand in which aspects they
              should focus on and take care of in order to improve their mental
              health. The app also keeps track of the scores of the Users and
              provides the statistics of the scores. So, the Users can check on
              which day their score was good or bad and draw various results
              from these statistics.
            </div>
          </div>

          <br />
          <div className={aboutstyles.card}>
            <h2 className={aboutstyles.h2} style={{ color: "#FF9966" }}>
              News Articles
            </h2>

            <div className={aboutstyles.fakeimg}>
              This app provides a lot of news articles. A good article is like a
              wholesome healthy meal for our brain and mental well-being. It is
              a well-established fact that reading articles can help the brain's
              cognitive functions and reduce stress and anxiety. Users can get
              the updates of the latest things happening around the world and
              keep themselves updated.
            </div>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <h2 className={aboutstyles.h2} style={{ color: "#CCFF99" }}>
              Memes
            </h2>

            <div className={aboutstyles.fakeimg}>
              Humour is a well-known, effective coping strategy, and it enables
              to raise awareness of the society about issues that many would
              rather not speak about, including mental illness. Memes provide a
              safe space to deal with depression and anxiety. Our app provides a
              feature to watch some wholesome memes.
            </div>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <h2 className={aboutstyles.h2} style={{ color: "#CCFFFF" }}>
              Milestones
            </h2>

            <div className={aboutstyles.fakeimg}>
              Our app encourages Users to maintain a milestones record. This
              helps User be active and aware of their objectives and is a record
              of their biggest dreams and wishes. A timeline diagram will also
              be available which when done completely will show the entire list
              of objectives the User have had and how many were completed and at
              when. This could be a good trip down memory lane or even help User
              motivated to stay on course of their objectives.
            </div>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <h2 className={aboutstyles.h2} style={{ color: "#CC99FF" }}>
              Virtual Events
            </h2>

            <div className={aboutstyles.fakeimg}></div>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <h2 style={{ color: "#7FFFD4" }}>Mailer</h2>

            <div className={aboutstyles.fakeimg}></div>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <h2 style={{ color: "Khaki" }}>Games</h2>

            <div className={aboutstyles.fakeimg}></div>
          </div>
        </div> */}
          {/* <div className={aboutstyles.rightcolumn}>
          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src=" https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg"
            />
            <h2>About Me</h2>
            <div className={aboutstyles.fakeimg} style={{height:"100px"}}>Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
          </div>
          <br />
          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse2.mm.bing.net/th?id=OIP.auVPY58zZxbU9hqfkmFb1gHaHa&pid=Api&P=0&w=300&h=300"
            />
          </div>
          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse1.mm.bing.net/th?id=OIP.MKQV-bgwRP7xGPnrUmi2_QHaDZ&pid=Api&P=0&w=354&h=163"
            />
          </div>
          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse3.mm.bing.net/th?id=OIP.9YQu-cKIowt8KaaiMBVXAgHaDh&pid=Api&P=0&w=361&h=172"
            />
          </div>
          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse4.mm.bing.net/th?id=OIP.sItVXRaTLqLtLMCXa1ALEAHaHa&pid=Api&P=0&w=300&h=300"
            />
          </div>
          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse2.mm.bing.net/th?id=OIP.noUn0vjNYO_YT9BLj0eK8QHaGe&pid=Api&P=0&w=227&h=199"
            />
          </div>
          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://static.vecteezy.com/system/resources/previews/000/385/432/original/illustration-of-characters-sending-an-email-vector.jpg"
            />
          </div>

          <br />

          <div className={aboutstyles.card}>
            <img
              className={aboutstyles.image1}
              src="https://tse4.mm.bing.net/th?id=OIP.96I4vhKoFl8WcX-P8qLpVgAAAA&pid=Api&P=0&w=242&h=194"
            />
          </div>
        </div>{" "} */}
          <br />
        </div>
      </div>
    </>
  );
};
export default About_Us;
