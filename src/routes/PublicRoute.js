
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../apis/AuthContextApi";

let PublicRoutes = ({ children }) => {
  let { isLoading, authUser } = useContext(AuthContext);
  if (
    (isLoading === true && authUser.accessToken) ||
    window.sessionStorage.getItem("token")
  ) {
return <Navigate to="/" />;
  } else {
 return <>{children}</>;  
  }
};
export default PublicRoutes;