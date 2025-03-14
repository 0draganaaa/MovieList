import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";

export const Login = () => {

  const authCntx = useContext(AuthContext);

  useEffect(() => {
    authCntx?.logUserIn();
  }, []);

  return <h2>Logging you in...</h2>;

}