import React , {useState} from "react";
import  profilestyles from "./Profile.module.css";
 
export const Profile = () =>{
  const [values, setValues] = useState({
        UserName: "",
        Password: "",
        PhoneNumber:"",
        EmailID: "",
        DescribeYourself: "",
       
        Hobbies: "",
        Interests: "",
 });
 const [submitted, setSubmitted]=useState(false);
 const [valid, setValid] = useState(false);
 const[gender, setGender] = useState();
 const handleUserNameInputChange = (event) =>
 {
    setValues({...values,UserName:event.target.value})
 }
const handlePasswordInputChange = (event) =>
 {
    setValues({...values,Password:event.target.value})
 }   
  const handlePhoneNumbereInputChange = (event) =>
 {
    setValues({...values,PhoneNumber:event.target.value})
 } 
 
 const handleEmailIDInputChange = (event) =>
 {
    setValues({...values,EmailID:event.target.value})
 } 
 const handleDescribeYourselfInputChange = (event) =>
 {
    setValues({...values,DescribeYourself:event.target.value})
 } 

 const handleHobbiesInputChange = (event) =>
 {
    setValues({...values,Hobbies:event.target.value})
 }
 const handleInterestsInputChange = (event) =>
 {
    setValues({...values,Interests:event.target.value})
 }
 const handleSubmit = (event) =>{
   event.preventDefault();
   if(values.UserName && values.Password && values.EmailID && values.DescribeYourself
    && values.PhoneNumber && values.Hobbies &&values.Interests)
    {
      setValid(true);
    }
   setSubmitted(true);
 }
 
    return(
     
      <div className={profilestyles.model}>
    
      
          <div className="container rounded bg-white mt-5 mb-5">
             {submitted && valid ?  <div className={profilestyles["success-message"]}>Sucessfully Saved your Profile</div> : null}
    <div className="row">
        <div className="col-md-3 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className ={profilestyles.fontapply}className="font-weight-bold">User Name</span><span className ={profilestyles.fontapply}className="text-black-50">Email I'd</span><span> </span></div>
        </div>
        <div className="col-md-5 border-right">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="text-right">User Profile</h4>
                </div>
                <div className="row mt-2">
                    <div className="col-md-6"><label className={profilestyles.labels}>Name</label><input onChange={handleUserNameInputChange} className="form-control" placeholder="UserName" name="UserName" value={values.UserName}/>{submitted && !values.UserName ?<span className ={profilestyles.fontapply}>Please enter a UserName</span>: null}</div>
                    <div className="col-md-6"><label className={profilestyles.labels}>Password</label><input onChange={handlePasswordInputChange} className="form-control"  placeholder="Password" name="Password" value={values.Password}/>{submitted && !values.Password ? <span className ={profilestyles.fontapply}>Please enter a Password</span> : null}</div>
                </div>
                <div className="row mt-3">
                    <div className="col-md-12"><label className={profilestyles.labels}>Mobile Number</label><input onChange={handlePhoneNumbereInputChange} className="form-control" placeholder="enter phone number" name="PhoneNumber" value={values.PhoneNumber}/>{submitted && !values.PhoneNumber ? <span className ={profilestyles.fontapply}>Please enter a Phone Number</span> : null}</div>
                  
                    <div className="col-md-12"><label className={profilestyles.labels}>Email ID</label><input onChange={handleEmailIDInputChange} className="form-control" placeholder="enter email id" name="EmailID" value={values.EmailID} />{submitted && !values.EmailID ? <span className ={profilestyles.fontapply}>Please enter a EmailID</span> : null}</div>
                    <div className="col-md-12"><label className={profilestyles.labels}>Describe Yourself</label><input onChange={handleDescribeYourselfInputChange} className="form-control" placeholder="Describe Yourself" name="DescribeYourself" value={values.DescribeYourself}/>{submitted && !values.DescribeYourself ? <span className ={profilestyles.fontapply}>Please fill this value</span> : null}</div>
                </div>
               <br/>
               <label className={profilestyles.labels}>Gender</label>
                <div>
                
                    
                   <input type="radio" name="gender" value="Male" onChange={e=>setGender(e.target.value)} />&nbsp;Male &nbsp;&nbsp;
                      <input type="radio" name="gender" value="Female" onChange={e=>setGender(e.target.value)} />&nbsp;Female &nbsp; &nbsp;
                      <input type="radio" name="gender" value="Other" onChange={e=>setGender(e.target.value)} />&nbsp;Other

                
                </div>
                <div className="mt-5 text-center"><button className={"btn btn-primary"+  " "+profilestyles["profile-button"]} type="button" onClick={handleSubmit}>Save Profile</button></div>
            </div>
        </div>
        <div className="col-md-4">
            <div className="p-3 py-5">
                <div className="d-flex justify-content-between align-items-center Hobbies"><span>Hobbies and Interests</span></div><br/>
                <div className="col-md-12"><label className={profilestyles.labels}>Hobbies</label><input onChange={handleHobbiesInputChange} className="form-control" placeholder="Hobbies" name="Hobbies" value={values.Hobbies}/>{submitted && !values.Hobbies ? <span className ={profilestyles.fontapply}>Please enter your Hobbies</span> : null}</div> <br/>
                <div className="col-md-12"><label className={profilestyles.labels}>Interests</label><input onChange={handleInterestsInputChange} className="form-control" placeholder="additional Interests" name="Interests" value={values.Interests}/>{submitted && !values.Interests ? <span className ={profilestyles.fontapply}>Please enter your other Interests</span> : null}</div>
            </div>
        </div>
    </div>
</div>
</div>
    );
}
