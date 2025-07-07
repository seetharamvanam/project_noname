
import React, { useState } from "react";
import "./Login.css";
import { apiRequest } from "../../services/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await apiRequest("/auth/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
      });
      // Success: handle login (redirect, set user, etc.)
      // Example: window.location.href = "/dashboard";
      alert("Logged in successfully!");
    } catch (err) {
      setError(err.message || "Network error. Please try again later.");
    }
  };

  return (
    <div className="login-bg web-only-bg login-bg-login">
      <div className="login-animated-shapes login-shapes-login">
        <div className="shape shape1" />
        <div className="shape shape2" />
        <div className="shape shape3" />
        {/* Unique: Animated lock icon for login */}
        <div className="login-lock-icon">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="16" width="22" height="14" rx="4" fill="#7366ff" fillOpacity="0.18"/>
            <rect x="14" y="10" width="10" height="10" rx="5" fill="#7366ff"/>
            <rect x="17.5" y="22" width="3" height="5" rx="1.5" fill="#ff6bcb"/>
          </svg>
        </div>
      </div>
      <form className="login-form web-form login-form-login" onSubmit={handleSubmit}>
        {/* Logo removed as requested */}
        <h2 className="login-title">Welcome Back!</h2>
        <p className="login-subtitle">Sign in to continue to <span className="brand-name">Noname</span></p>
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
            autoComplete="current-password"
            required
          />
        </div>
        {error && <div className="login-error">{error}</div>}
        <button type="submit" className="login-btn web-btn">Login</button>
        <div className="login-footer">
          <span>Don't have an account?</span>
          <a href="#" className="login-link" onClick={(e) => { e.preventDefault(); window.location.href = "/signup"; }}>Sign Up</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
