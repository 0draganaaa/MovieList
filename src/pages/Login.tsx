import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router";

export const Login = () => {

  const authCntx = useContext(AuthContext);
  const navigator = useNavigate();

  useEffect(() => {
    const user = authCntx?.logUserIn();
    if(!user) {
      authCntx?.logUserIn();
    } else {
      navigator('/lists');
    }

  }, [authCntx, navigator]);

  return <h2>Logging you in...</h2>;

}