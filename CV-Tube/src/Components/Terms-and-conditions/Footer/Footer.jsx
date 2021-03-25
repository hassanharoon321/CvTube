import React from "react";
import "./Footer.css";
import {
  AiOutlineInstagram,
  AiFillFacebook,
  AiFillLinkedin,
} from "react-icons/ai";
// import AppleStore from "../images/app-store.JPG";
// import PlayStore from "../images/play-store.JPG";

function Footer() {
  return (
    <div className="footer-tube">
      
      <footer className="row-1">
        <h4 className="job-seekers">Job Seekers</h4>
        <h4 className="popular-searches">Popular Searches</h4>
        <p>Graphics Design Jobs in Karachi</p>
        <p>Video Editing Jobs in Karachi</p>
        <p>Accountant Jobs</p>
        <p>Fresher Jobs in Pakistan</p>
        <p>IT Interns Jobs in Karachi</p>
        <p>+9 more</p>
      </footer>

      <footer className="row-2">
        <h4 className="loc-search">Locations</h4>
        <p>Jobs in Karachi</p>
        <p>Jobs in Lahore</p>
        <p>Jobs in Islamabad</p>
        <p>Jobs in Quetta</p>
        <p>Jobs in Hyderabad</p>
        <p>+2 more</p>
      </footer>

      <footer className="row-3">
        <h4 className="nat-search">Nationality</h4>
        <p>Jobs of Arabs</p>
        <p>Jobs for Pakistani</p>
        <p>Jobs for Indians</p>
        <p>Jobs for Bandgladeshi</p>
        <p>+5 more</p>
      </footer>

      <footer className="row-4">
        <h4 className="users-sear">Users</h4>
        <h4 className="job-seek">Job Seekers</h4>
        <p>Home</p>
        <p>Dashboard</p>
        <p>My Profile</p>
        <p>Carrers Tips</p>
        <p>FAQ</p>
        <p>Mobile Apps</p>
      </footer>

      <footer className="row-5">
        <h4 className="recruiters">Recruiters</h4>
        <p>Register</p>
        <p>Login</p>
        <p>Testimonials</p>
      </footer>

      <footer className="row-6">
        <h4 className="download-app">Download our app</h4>
        {/* <img src={AppleStore} alt="AppleStore" className="store-img" />
        <img src={PlayStore} alt="PlayStore" /> */}
        <span>
          <h4 className="download-app-2">Follow us on</h4>
          <AiFillFacebook className="social-icon-tube" />
          <AiOutlineInstagram className="social-icon-tube" />
          <AiFillLinkedin className="social-icon-tube" />
        </span>
      </footer>

      <nav className="nav-foot">
        <hr className="nav-line" />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact</li>
          <li>Feedback</li>
        </ul>
      </nav>
    </div>
  );
}

export default Footer;
