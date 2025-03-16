import axios from "axios";
import { IMovieResponse, IMovieSnakeCase, IMoviesResponse } from "../types/movies";

class MovieService {
  fetchMovies = async (page: number): Promise<IMoviesResponse> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      },
      params: {
        page: page
      }
    };
    const response: IMoviesResponse = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/movie/now_playing`, config);
    return response;
   
  };

  getMovieDetails = async (movieId: number): Promise<IMovieSnakeCase> => {
    const config = {
      headers: {
        'Authorization': 'Bearer ' + process.env.REACT_APP_AUTH_KEY
      }
    };
    const response: IMovieResponse = await axios.get(`${process.env.REACT_APP_TMDB_BASE_PATH}/movie/${movieId}`, config);
    return response.data;
  }
}

const movieService = new MovieService();
export default movieService;
