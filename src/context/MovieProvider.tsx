import { createContext, useState, useEffect, ReactNode } from "react";
import movieService from "../services/movieService";
import { MovieContextType } from "./types";
import { IMovie } from "../types/movies";
import { mapMovies } from "../utils/movies";

// Create the context
export const MovieContext = createContext<MovieContextType | undefined>(undefined);

export const MovieProvider = ({ children }: { children: ReactNode }) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchMoviesByPage = async (page: number) => {
    try {
      const response = await movieService.fetchMovies(page);
      const movies = mapMovies(response.data.results, process.env.REACT_APP_IMAGES_BASE_PATH ?? '');
      setMovies(movies);
      setTotalPages(response.data.total_pages);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  useEffect(() => {
    fetchMoviesByPage(currentPage);
  }, [currentPage]);

  return (
    <MovieContext.Provider value={{ movies, setMovies, currentPage, setCurrentPage, totalPages }}>
      {children}
    </MovieContext.Provider>
  );
};
