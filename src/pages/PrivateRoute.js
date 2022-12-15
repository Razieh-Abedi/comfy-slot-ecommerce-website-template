import React from "react";
import { Navigate } from "react-router-dom";
import { useUserContext } from "../context/user_context";

function PrivateRoute({ children }) {
  const { myUser } = useUserContext();
  if (!myUser) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}

export default PrivateRoute;
