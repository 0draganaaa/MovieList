import axios from "axios";
import { IListDetails, IListsMoviesResponse, IListsResponse } from "../types/lists";

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
    if (!sessionId) {
      throw new Error("Session ID is required");
  }  

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

  deleteList = async (listId: number, sessionId: string | undefined) => {
    if (!sessionId) {
      throw new Error("Session ID is required");
  }  

    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const response: IListsResponse = await axios.delete(`${process.env.REACT_APP_TMDB_BASE_PATH}/list/${listId}?session_id=${sessionId}`, config);
    return response;
  };

  addMovieToList = async (listId: number, movieId: number, sessionId: string | undefined) => {
    if (!sessionId) {
      throw new Error("Session ID is required");
  }  
    
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const data = {
      media_id: movieId
    };

    const response: IListsResponse = await axios.post(`${process.env.REACT_APP_TMDB_BASE_PATH}/list/${listId}/add_item?session_id=${sessionId}`, data, config);
    return response;
  }

  removeMovieFromList = async (listId: number, movieId: number, sessionId: string | undefined) => {
    if (!sessionId) {
      throw new Error("Session ID is required");
  }  
    
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const data = {
      media_id: movieId
    };

    const response: IListsResponse = await axios.post(`${process.env.REACT_APP_TMDB_BASE_PATH}/list/${listId}/remove_item?session_id=${sessionId}`, data, config);
    return response;
  }

  getListContent = async (listId: number): Promise<IListsMoviesResponse> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };

    const response = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/list/${listId}`, config);
    return response.data;
  }
  
}

const listsService = new ListsService();
export default listsService;
