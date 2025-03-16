import { createContext, useState, ReactNode } from "react";
import authService from "../services/authService";
import { AuthContextType } from "./types";
import { getToken } from "../utils/tokens";
import { useNavigate } from "react-router";

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [requestToken, setRequestToken] = useState<string | null>(null);
  const [sessionId, setSessionId] = useState<string | undefined>();

  const navigator = useNavigate();

  const loadUser = () => {
    const requestToken = getToken('requestToken');
    const sessionId = getToken('sessionId');

    if(requestToken && sessionId) {
      setRequestToken(requestToken);
      setSessionId(sessionId);
      return true;
    }

    return false;
  }

  const logUserIn = async () => {
    try {
      const userLoaded = loadUser();
      if(!userLoaded) {
        const requestToken = await authService.createRequestToken();
        setRequestToken(requestToken);

        window.location.href = `https://www.themoviedb.org/authenticate/${requestToken}?redirect_to=${window.location.origin}/auth/callback`;
      } else {
        navigator('/lists');
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ sessionId, setSessionId, logUserIn }}>
      {children}
    </AuthContext.Provider>
  );
};
