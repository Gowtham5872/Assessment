import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h2 className="mb-3">Dashboard</h2>
        <p><strong>Role:</strong> {user.role}</p>

        {user.role === "SUPER_ADMIN" && (
          <div className="alert alert-primary">
            🔐 Super Admin Access – You can manage all users and admins.
          </div>
        )}

        {user.role === "ADMIN" && (
          <div className="alert alert-warning">
            ⚙️ Admin Access – You can manage normal users.
          </div>
        )}

        {user.role === "USER" && (
          <div className="alert alert-success">
            👤 User Access – Welcome to your personal dashboard.
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
