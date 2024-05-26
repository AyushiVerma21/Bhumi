import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Make the POST request to the API
      const response = await axios.post("http://127.0.0.1:8000/api/login/", {
        email: event.target.email.value,
        password: event.target.password.value,
      });

      // Handle the response and perform necessary actions
      // e.g., save user data to local storage, set authentication state, etc.

      // Redirect to the "/home" page
      navigate("/feedback/admin-form");
      console.log("response: " + JSON.stringify(response));
    } catch (error) {
      console.error("Login failed:", error);
      // Handle login error, show error message, etc.
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Log In</h3>
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
          Submit
        </button>
      </div>
    </form>
  );
};

export default Login;
