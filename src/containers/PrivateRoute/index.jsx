import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth";

const PrivateRoute = ({ mustBeAuthorized, redirectTo, children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn !== mustBeAuthorized) navigate(redirectTo);
  }, [isLoggedIn, mustBeAuthorized, redirectTo, navigate]);

  if (isLoggedIn !== mustBeAuthorized) return null;

  return children;
};

export default PrivateRoute;
