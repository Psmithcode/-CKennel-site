import React from "react";

import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  const { component: Component, ...rest } = props;
  const isAuthenticated = localStorage.getItem("token");
  console.log(isAuthenticated, "authenticated");
  return isAuthenticated ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default ProtectedRoute;

// import { Route, Routes } from "react-router-dom";
// import App from "../App";

// const PrivateRoute = ({ component: Component, ...rest }) => {
// const isAuthenticated = !!localStorage.getItem("token");

//   return (
//     <Routes>
//       <Route
//         {...rest}
//         render={(props) =>
//           isAuthenticated ? <Component {...props} /> : <App />
//         }
//       />
//     </Routes>
//   );
// };

// export default PrivateRoute;
