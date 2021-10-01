import React from "react";
import image1 from "../Assets/image1.png"
import logo1 from "../Assets/mentalhealth_icon_round.png"
import "./Signup.css";
export const Signup = () => 
{
  return (
<div class="container px-4 py-5 mx-auto">
    <div class="card card0">
        <div class="d-flex flex-lg-row flex-column-reverse">
            <div class="card card1">
                <div class="row justify-content-center my-auto">
                    <div class="col-md-8 col-10 my-5">
                        <div class="row justify-content-center px-3 mb-3"> 
                        <img id="logo" src={logo1} alt="logo1"/> </div>
                        <h3 class="mb-5 text-center heading">Welcome again!</h3>
                        <div class="form-group"> 
                        <label class="form-control-label text-muted">Username</label>
                         <input type="text" id="username" name="username" placeholder="Username" class="form-control"/> </div>
                        <div class="form-group"> <label class="form-control-label text-muted">Password</label> 
                        <input type="password" id="psw" name="psw" placeholder="Password" class="form-control"/> </div>
                        <div class="row justify-content-center my-3 px-3"> <button class="btn-block btn-color">Login to Healify</button> </div>
                        <div class="row justify-content-center my-2"> <a href="#"><small class="text-muted">Forgot Password?</small></a> </div>
                    </div>
                </div>
                <div class="bottom text-center mb-5">
                    <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<button class="btn btn-white ml-2">Create new</button></p>
                </div>
            </div>
            <div class="card card2">
                <div class="my-auto mx-md-5 px-md-5 right">
                    <div ><img class="rounded mx-auto d-block" src={image1} alt="image1" width="450px" height="280px" /></div><br /><br />
                    <div><h3 class="text-white text-center mb-5">Healify</h3> </div>
                    <div><small class="text-white">Dealing with mental health is what makes us human. But for a lot of us, it's a struggle to be open about it. Even if we are open about it, there is a global shortage of psychiatrists and lack of mental health care access in rural regions. In this context, we feel our website can serve as a viable tool to bridge the mental health treatment gap. Our app serves as a user feedback system for self-management of every individual</small></div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}