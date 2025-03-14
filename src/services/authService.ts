import axios from "axios";
import { ISessionResponse, ITokenResponse } from "../types/auth";
import { getToken, setToken } from "../utils/tokens";

class AuthService {
  createRequestToken = async (): Promise<string> => {

    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      },
    };
    const response: ITokenResponse = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/authentication/token/new`, config);
    setToken('requestToken', response.data.request_token);
    return response.data.request_token;
  };

  createSessionId = async (requestToken: string): Promise<string> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const data = {
        request_token: requestToken
      }
    const response: ISessionResponse = await axios.post(`${process.env.REACT_APP_TMDB_BASE_PATH}/authentication/session/new`, data, config);
    const sessionId = getToken('sessionId');
    if(!sessionId && response.data.session_id) {
      setToken('sessionId', response.data.session_id);
    }
    return response.data.session_id;
  }
}

export default new AuthService();

