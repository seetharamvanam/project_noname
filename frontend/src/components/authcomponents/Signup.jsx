import React, { useState } from "react";
import "./Login.css";
import { apiRequest } from "../../services/api";

const Signup = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    if (!firstname.trim() || !lastname.trim()) {
      setError("Please enter your first and last name.");
      return;
    }
    try {
      await apiRequest("/auth/signup", {
        method: "POST",
        body: JSON.stringify({ firstname, lastname, email, password }),
      });
      setSuccess("Account created! Please log in.");
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message || "Network error. Please try again later.");
    }
  };

  // Animation shapes for signup (extra shapes for more animation)
  return (
    <div className="login-bg web-only-bg login-bg-signup">
      <div className="login-animated-shapes login-shapes-signup">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />
        <div className="shape shape4" />
        <div className="shape shape5" />
        {/* Unique: Animated stars for signup */}
        <div className="signup-stars">
          <div className="star star1" />
          <div className="star star2" />
          <div className="star star3" />
        </div>
      </div>
      <form className="login-form web-form login-form-signup" onSubmit={handleSubmit}>
        <h2 className="login-title">Create Account</h2>
        <p className="login-subtitle">Sign up to join <span className="brand-name">Noname</span></p>
        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="login-input"
            autoComplete="given-name"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Last Name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="login-input"
            autoComplete="family-name"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
            autoComplete="username"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
            autoComplete="new-password"
            required
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="login-input"
            autoComplete="new-password"
            required
          />
        </div>
        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}
        <button type="submit" className="login-btn web-btn">Sign Up</button>
        <div className="login-footer">
          <span>Already have an account?</span>
          <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); window.location.href = "/login"; }}>Login</a>
        </div>
      </form>
    </div>
  );
};

export default Signup;
