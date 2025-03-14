import axios from "axios";
import { IMovieResponse } from "../types/movies";

class MovieService {
  fetchMovies = async (page: number): Promise<IMovieResponse> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      },
      params: {
        page: page
      }
    };
    const response: IMovieResponse = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/movie/now_playing`, config);
    return response;
   
  };
}

export default new MovieService();
