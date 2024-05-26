import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request to the API
      navigate("/feedback/login");
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", {
        firstname: event.target.firstName.value,
        lastname: event.target.lastName.value,
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // Handle the response and perform necessary actions
      // e.g., show success message, save user data, etc.

      // Navigate to the "/log-in" page
    } catch (error) {
      console.error("Sign up failed:", error);
      // Handle sign up error, show error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign Up</h3>
      <div className="mb-3">
        <label>First name</label>
        <input
          type="text"
          name="firstName"
          className="form-control"
          placeholder="First name"
          required
        />
      </div>
      <div className="mb-3">
        <label>Last name</label>
        <input
          type="text"
          name="lastName"
          className="form-control"
          placeholder="Last name"
          required
        />
      </div>
      <div className="mb-3">
        <label>Email address</label>
        <input
          type="email"
          name="email"
          className="form-control"
          placeholder="Enter email"
          required
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="form-control"
          placeholder="Enter password"
          required
        />
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignUp;
