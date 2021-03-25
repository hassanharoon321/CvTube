import React from "react";
import "../Cover/CoverImage.css";
import Cover from "../assests/cover.png";
import Logo2 from "../assests/Logo.png";

function CoverImage() {
  return (
    <div>
      <div className="img-section">
        <img
          src={Cover}
          alt="cover"
          height="700px"
          width="100%"
          className="img-des"
        />

        <div className="logo-2">
          <img src={Logo2} alt="" className="img-src" />
          <h2 className="for-recruiters">For Recruiters</h2>
        </div>

        <div className="form-section">
          <div>
            <h1 className="reg">Register</h1>

          <div className="form-1">
          <label className="name-label-1">Firstname</label><br/>
          <input type="text" className="form-name-1" placeholder="Type your name here"/><br/>
          <label className="name-label-1">Lastname</label><br/>
          <input type="text" className="form-name-1" placeholder="Type your name here"/><br/>
          <label className="name-label-1">Company Name</label><br/>
          <input type="text" className="form-name-1" placeholder="Type your name here"/><br/>
          <label className="name-label-1">Phone Number</label><br/>
          <input type="text" className="form-name-1" placeholder="Type your name here"/><br/>
          </div>
          <div className="form-2">
          <label className="name-label-2">Email</label><br/>
          <input type="text" className="form-name-2" placeholder="Type your name here"/><br/>
          <label className="name-label-2">Password</label><br/>
          <input type="text" className="form-name-2" placeholder="Type your name here"/><br/>
          <label className="name-label-2">Confirm Password</label><br/>
          <input type="text" className="form-name-2" placeholder="Type your name here"/><br/>
          </div>
          <div className="form-3">
          <p className="terms-cond">By Clicking "Register" you agree to our <span className="terms-and-cond-app">Terms and Condition</span><br/>as well as our <span className="terms-and-cond-app">Privacy Policy</span></p>
          <button className="reg-btn">Register</button>
          <p className="have-an-account">Already have an account? <span>Login here</span></p>
          </div>








          </div>

        </div>
      </div>
    </div>
  );
}

export default CoverImage;

{
  /* <div className="form-section">
  <h1 className="reg">Register</h1> 
  <div className="form-1">
    <label>Firstname</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your name here"
    />
    <br />
    <label>Lastname</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your name here"
    />
    <br />
    <label>Company Name</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your company name here"
    />
    <br />
    <label>Phone Number</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your number here"
    />
  </div>
  <div className="form-2">
    <label>Email</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your email here"
    />
    <br />
    <label>Password</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your password here"
    />
    <br />
    <label>Confirm Password</label>
    <input
      type="text"
      name=""
      id=""
      placeholder="Type your password here"
    />
    <br />
  </div>

  <div className="agree">
  <p >
    By Clicking "Register" you agree to our
    <span>Terms and Condition</span>
  </p>
  </div>
</div> */
}
