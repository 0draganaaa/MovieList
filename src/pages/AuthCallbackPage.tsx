import { useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router";
import { AuthContext } from "../context/AuthProvider";
import authService from "../services/authService";
import { Container } from "react-bootstrap";

export const AuthCallbackPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    const handleAuthCallback = async () => {
      const requestToken = searchParams.get("request_token");
      const sessionId = authCtx?.sessionId;
      if (requestToken && !sessionId) {
        try {
          const sessionId = await authService.createSessionId(requestToken);
          
          if (authCtx) authCtx.setSessionId(sessionId);
          localStorage.setItem("sessionId", sessionId);

          navigate("/lists");
        } catch (error) {
          console.error("Error creating session:", error);
          navigate("/");
        }
      }
    };

    handleAuthCallback();
  }, [searchParams, navigate, authCtx]);

  return <Container className="list-container"><h2>Logging you in...</h2></Container>;
};