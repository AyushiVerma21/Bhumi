import React from "react";
import logo from "./logo.png";
import "./FeedbackHeader.css"; // Import custom CSS file

const FeedbackHeader = () => {
  return (
    <div className="header-container">
      <div className="green-box">
        <img src={logo} alt="Logo" className="logo" />
        <h2
          style={{ color: "white", textAlign: "center", marginLeft: "570px" }}
        >
          Feedback Form
        </h2>
      </div>
    </div>
  );
};

export default FeedbackHeader;
