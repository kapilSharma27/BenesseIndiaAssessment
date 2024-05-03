import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext, AuthContextType } from "../../context/auth/authContext";

// interface PrivateRouteProps extends RouteProps {
//   component: React.ComponentType<any>;
// }

const PrivateRoute: React.FC<any> = ({ component: Component, ...rest }) => {
  const authContext : AuthContextType = useContext(AuthContext);
  const { isAuthenticated, loading } = authContext;

  return (
    <Route
      {...rest}
      render={(props: any) =>
        !isAuthenticated && !loading ? (
          <Redirect to="/login" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PrivateRoute;
