import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2>JobPortal</h2>
          <p>Find your dream job and take the next step in your career.</p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/saved-jobs">Saved Jobs</Link>
          <Link to="/applications">Applications</Link>
        </div>

        <div className="footer-section">
          <h3>Account</h3>

          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link to="/profile">Profile</Link>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📧 support@jobportal.com</p>
          <p>📍 Hyderabad, India</p>
          <p>📞 +91 98765 43210</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 JobPortal. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
