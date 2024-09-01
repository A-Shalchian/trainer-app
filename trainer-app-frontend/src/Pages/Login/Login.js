import React, { useState } from "react";
import { login } from "../../Services/Api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Submitting login form:", { email, password }); // Debugging line
      const data = await login(email, password); // Use the correct arguments
      console.log("Login successful, received data:", data); // Debugging line
      localStorage.setItem("token", data.token); // Store the token if needed
      navigate("/"); // Redirect to home or another page after successful login
    } catch (error) {
      console.error("Login error:", error.message); // Log the error message
      alert(error.message); // Display the error message
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
        <div className="signup-link">
          <p>
            Don't have an account? <a href="/signup">Sign up here</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
