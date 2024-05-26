import React from "react";
import logo from "./logo_black.png"; // Replace 'your-logo.png' with the actual path to your logo image
import "./DonationHeader.css"; // Import custom CSS file for Navbar styles

const DonationHeader = () => {
  return (
    <nav className="navbar header-container">
      <div className="navbar-brand">
        <img src={logo} alt="Your Logo" className="logo" />
      </div>
      <ul className="navbar-links navbar-links-left">
        {" "}
        {/* Add navbar-links-left class here */}
        <li className="navbar-link">
          <a href="/feedback/login">Login</a>
        </li>
        <li className="navbar-link">
          <a href="/feedback/signup">Signup</a>
        </li>
        <li className="navbar-link">
          <a href="/feedback">Feedback form</a>
        </li>
      </ul>
      <button className="donate-button">
        <a href="https://bhumi.ngo/bhumi-donate/">Donate ❤️</a>
      </button>
    </nav>
  );
};

export default DonationHeader;
