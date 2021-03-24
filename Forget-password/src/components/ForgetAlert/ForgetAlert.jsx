import React from "react";
import "../../components/ForgetAlert/ForgetAlert.css";
import Logo2 from "../../assests/Logo.png";

function ForgetAlert() {
  return (
    <div className="forget-alert">
      <img src={Logo2} />
      <h3 className="recr">For Recruiters</h3>

      <div className="alert-for">
        <h2 className="forget-pass">Forget Your Password?</h2>
        <p className="desc">
          Enter your email address below and we will send you a reset password
          link.
        </p>
        <div className="email-alert">
        <label>Enter Registered Email ID</label>
        <input type="email" placeholder="Enter your Email ID"/>
        </div>
        <p className="password-instead">Remember your password? Login instead</p>
        <button className="send-btn">Send</button>
      </div>
    </div>
  );
}

export default ForgetAlert;
