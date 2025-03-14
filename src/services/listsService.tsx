import axios from "axios";
import { IListDetails, IListsResponse } from "../types/lists";

class ListsService {
  fetchLists = async (): Promise<IListsResponse> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      },
    };
    const response: IListsResponse = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/account/${process.env.REACT_APP_ACCOUNT_ID}/lists`, config);
    return response;
  };

  createList = async (listDetails: IListDetails, sessionId: string | undefined) => {
    if (!sessionId) {throw new Error};

    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const data = {
      ...listDetails
    };

    const response: IListsResponse = await axios.post(`${process.env.REACT_APP_TMDB_BASE_PATH}/list?session_id=${sessionId}`, data, config);
    return response;
  };
}

export default new ListsService();
