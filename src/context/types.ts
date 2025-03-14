import { IList, IListDetails } from "../types/lists";
import { IMovie } from "../types/movies";

export interface MovieContextType {
  movies: IMovie[];
  setMovies: (movies: IMovie[]) => void;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>
  totalPages: number;
}

export interface AuthContextType {
  sessionId: string | undefined;
  setSessionId: React.Dispatch<React.SetStateAction<string | undefined>>;
  logUserIn: () => Promise<void>;
}

export interface ListsContextType {
  lists: IList[];
  createList: (list: IListDetails) => Promise<void>;
}
