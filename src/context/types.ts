import { IList, IListDetails, IListsMovies } from "../types/lists";
import { IMovie } from "../types/movies";

export interface MovieContextType {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number;
  selectedMovie: IMovie | null;
  setSelectedMovie: React.Dispatch<React.SetStateAction<IMovie | null>>;
  getMovieDetails: (movieId: number) => Promise<void>;
}

export interface AuthContextType {
  sessionId: string | undefined;
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>;
  logUserIn: () => Promise<void>;
}

export interface ListsContextType {
  lists: IList[];
  list:  IListsMovies | null;
  getLists: () => Promise<void>;
  createList: (list: IListDetails) => Promise<void>;
  removeList: (listId: number) => Promise<void>;
  addMovieToAList: (listId: number, movieId: number) => Promise<void>;
  getListContent: (listId: number) => Promise<void>;
  removeMovieFromTheList: (listId: number, movieId: number) => Promise<void>;
}
