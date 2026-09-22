import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <nav>
      <h2>JobPortal</h2>

      <div>
        <Link to="/">Home</Link>

        <Link to="/jobs">Jobs</Link>

        <Link to="/saved-jobs">Saved Jobs</Link>

        <Link to="/applications">Applications</Link>

        {user ? (
          <>
            <Link to="/profile">Profile</Link>

            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;