import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated, "authenticated");
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

