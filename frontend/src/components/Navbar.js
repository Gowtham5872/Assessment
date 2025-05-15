import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
      <span className="navbar-brand">User Dashboard</span>
      {user && (
        <div className="ms-auto d-flex gap-2 align-items-center">
          <span className="text-light me-3">
            Welcome, {user.username} ({user.role})
          </span>
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/dashboard")}>Dashboard</button>
          <button className="btn btn-outline-light btn-sm" onClick={() => navigate("/profile")}>Profile</button>
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
