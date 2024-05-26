import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import "./admin_form.css";

const AdminForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    event: "",
    edate: "",
    elocation: "",
    q1: "",
    q2: "",
    q3: "",
    q4: "",
    q5: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission to the server or database
    // Here, we're using Axios to make a POST request to an API endpoint
    navigate("/feedback");
    axios
      .post("http://127.0.0.1:8000/api/addquestion", formData)
      .then((response) => {
        // Handle successful form submission
        console.log("Added Question");
      })
      .catch((error) => {
        // Handle error
        console.error("Unable to add question", error);
      });
  };

  return (
    <div className="signup-container">
      <h2>ADD QUESTIONS</h2>
      <form className="signup-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="Event_Name"
          placeholder="Enter Event Name"
          value={formData.ename}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="q1"
          placeholder="Enter Question 1"
          value={formData.q1}
          onChange={handleInputChange}
          className="input-field"
          required
        />

        <input
          type="text"
          name="q2"
          placeholder="Enter Question 2"
          value={formData.q2}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="q3"
          placeholder="Enter Question 3"
          value={formData.q3}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="q4"
          placeholder="Enter Question 4"
          value={formData.q4}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <input
          type="text"
          name="q5"
          placeholder="Enter Question 5"
          value={formData.q5}
          onChange={handleInputChange}
          className="input-field"
          required
        />
        <button type="submit" className="signup-btn">
          {" "}
          Add Feedback Questions
        </button>
      </form>
    </div>
  );
};

export default AdminForm;
