import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = ({ allowedRoles, children }) => {
  const { user } = useContext(AuthContext);

  if (!user) return <Navigate to="/" />;

  if (!allowedRoles.includes(user.role)) {
    return <div>403 Forbidden – You do not have access</div>;
  }

  return children;
};

export default ProtectedRoute;
