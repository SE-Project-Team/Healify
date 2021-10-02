import React from "react";
import "./Registration.css";
export const Registration = () => 
{
  return (
      <div class="container">
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto">
        <div class="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
          <div class="card-img-left d-none d-md-flex">
          </div>
          <div class="card-body p-4 p-sm-5">
            <h5 class="card-title text-center mb-5 fw-light fs-3">Create Account</h5>
            <form>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInputUsername" placeholder="myusername" required autofocus/>
                <label for="floatingInputUsername">Username</label>
              </div>

              
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingEmail" placeholder="Email" required autofocus/>
                <label for="floatingEmail">Email</label>
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingPhoneNumber" placeholder="PhoneNumber" required autofocus/>
                <label for="floatingPhoneNumber">PhoneNumber</label>
              </div>

                 <input type="checkbox" class="checkbox" required=""/>
							<span> I Agree To The Terms & Conditions</span>
						<div class="clear"> </div>
					
                    <br/>
              
              <div class="d-grid mb-2">
                <button class="btn btn-lg btn-primary btn-login fw-bold fs-6  " type="submit">Sign up</button>
              </div>
            

              <a class="d-block text-center mt-2 small" href="#">Redirect Back to Sign in Page</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}