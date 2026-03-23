import { Navigate } from "react-router-dom";
import React from "react";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("jwt_token");

  if (!token) {
    return React.createElement(Navigate, { to: "/register", replace: true });
  }

  return children;
};

export default ProtectedRoute;
