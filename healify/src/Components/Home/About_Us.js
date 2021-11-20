import React from "react";
import aboutstyles from "./About_us.module.css";
export const About_Us = () =>{
    return(
        <div className={aboutstyles.aboutmain}>
       <div className={aboutstyles.header}>
  <h2 style={{color:"DeepPink"}}>ABOUT US</h2>
</div>
<div className={aboutstyles.row}>
  <div className={aboutstyles.leftcolumn}>
    <div className={aboutstyles.card}>
      <h2 style={{color:"lightpink"}}>Mental Health</h2>
      {/* <h5>Milestones</h5> */}
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"lightpink" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18, lineHeight:1.2}}>
        Dealing with mental health is what makes us human. But for a lot of us, it's a struggle to be open about it. Even if we are open about it, there is a global shortage of psychiatrists and lack of mental health care access in rural regions
         s. In this context, we feel that apps can serve as a viable tool to bridge the mental health treatment gap. Our app serves as a user feedback system for self-management and maintaining good mental health of every individual. 
        
        This app encourages users to maintain their milestones records so that they can focus on what is important. We intend this to be a part of their self-care task so that users feel active. The web-app provides an option to read good news articles and some wholesome memes for recreation. This app can be revisited every day, to keep oneself occupied with his goals and not fall into the stress holes created by the world around him.  {/* <img clasName={aboutstyles.imagestyle}  src="https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg" /> */}
      </div>
      {/* <p>Some text..</p> */}
    </div>
    <br />
    
    <div className={aboutstyles.card}>
      <h2 className={aboutstyles.H2} style={{color:"skyblue"}}>Quiz</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"skyblue" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18, lineHeight:1.5}}>
          Through our app users can take the mental health self-assessment test daily or weekly. This test section comprises of 4 categories namely Ill being and well being, control and coping, Relationships and belonging and self perception. After completing the test, the app gives score report of in the respective category. Based on these results, the users can understand in which aspects they should focus on and take care of in order to improve their mental health. The app also keeps track of the scores of the users and provides the statistics of the scores. So, the users can check on which day their score was good or bad and draw various results from these statistics.
          </div>
    
    </div>
    <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"#FF9966"}}>News Articles</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"#FF9966" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18, lineHeight:1.5}}>
         This app provides a lot of news articles. A good article is like a wholesome healthy meal for our brain and mental well-being. It is a well-established fact that reading articles can help the brain's cognitive functions and reduce stress and anxiety. Users can get the updates of the latest things happening around the world and keep themselves updated.
          </div>
    
    </div>
     <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"#CCFF99"}}>Memes</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"#CCFF99" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18,lineHeight:1.8}}>
    Humour is a well-known, effective coping strategy, and it enables to raise awareness of the society about issues that many would rather not speak about, including mental illness. Memes provide a safe space to deal with depression and anxiety. Our app provides a feature to watch some wholesome memes.
          </div>
    
    </div>
     <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"#CCFFFF"}}>Milestones</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"#CCFFFF" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18,lineHeight:1.8}}>
  Our app encourages users to maintain a milestones record. This helps user be active and aware of their objectives and is a record of their biggest dreams and wishes. A timeline diagram will also be available which when done completely will show the entire list of objectives the user have had and how many were completed and at when. This could be a good trip down memory lane or even help user motivated to stay on course of their objectives.
          </div>
    
    </div>
     <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"#CC99FF"}}>Virtual Events</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"#CC99FF" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18, lineHeight:1.5}}>
 
          </div>
    
    </div>
      <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"#7FFFD4"}}>Mailer</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"#7FFFD4" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18, lineHeight:1.5}}>
 
          </div>
    
    </div>
   <br />
     <div className={aboutstyles.card}>
      <h2 style={{color:"Khaki"}}>Games</h2>
     
      <div className={aboutstyles.fakeimg} style={{height:"200px",backgroundColor:"Khaki" ,color:"SlateGrey", fontFamily:"sans-serif", fontSize:18,lineHeight:1.5}}>
 
          </div>
    
    </div>

  </div>
  <div className={aboutstyles.rightcolumn}>
    <div className={aboutstyles.card}>
        <img className={aboutstyles.image1} src =" https://static.vecteezy.com/system/resources/previews/000/425/393/original/outstanding-mental-health-vector.jpg"/>
      {/* <h2>About Me</h2> */}
      {/* <div className={aboutstyles.fakeimg} style={{height:"100px"}}>Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p> */}
    </div>
   <br/>
    <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse2.mm.bing.net/th?id=OIP.auVPY58zZxbU9hqfkmFb1gHaHa&pid=Api&P=0&w=300&h=300" />
    </div>
    <br/>
    
       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse1.mm.bing.net/th?id=OIP.MKQV-bgwRP7xGPnrUmi2_QHaDZ&pid=Api&P=0&w=354&h=163" />
    </div>
     <br/>
    
    
       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse3.mm.bing.net/th?id=OIP.9YQu-cKIowt8KaaiMBVXAgHaDh&pid=Api&P=0&w=361&h=172" />
    </div>
    <br/>
    
       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse4.mm.bing.net/th?id=OIP.sItVXRaTLqLtLMCXa1ALEAHaHa&pid=Api&P=0&w=300&h=300" />
    </div>
     <br/>
    
       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse2.mm.bing.net/th?id=OIP.noUn0vjNYO_YT9BLj0eK8QHaGe&pid=Api&P=0&w=227&h=199" />
    </div>
     <br/>
    

       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://static.vecteezy.com/system/resources/previews/000/385/432/original/illustration-of-characters-sending-an-email-vector.jpg" />
    </div>
     
     <br/>
    
       <div className={aboutstyles.card}>
      
    <img className={aboutstyles.image1} src ="https://tse4.mm.bing.net/th?id=OIP.96I4vhKoFl8WcX-P8qLpVgAAAA&pid=Api&P=0&w=242&h=194" />
    </div>
  </div> <br/>
    
  
  
   
</div>


</div>
    );
}
export default About_Us;