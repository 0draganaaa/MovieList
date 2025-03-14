import { useContext, useState } from "react";
import { Container } from "react-bootstrap";
import { IMovie } from "../types/movies";
import { MovieList } from "../components/MovieList";
import { MovieModal } from "../components/MovieModal";
import { MovieContext } from "../context/MovieProvider";
import { PaginationComponent } from "../components/Pagination";
import { Navigation } from "../components/Navigation";

export const MainPage = () => {
  const [selectedMovie, setSelectedMovie] = useState<IMovie | null>(null);

  const moviesCntx = useContext(MovieContext);

  return (
    moviesCntx?.movies ? ( 
      <>
        <Container className="main-container">
          <h1 className="text-center mt-5 mb-5">Movie List App</h1>
          <MovieList
            movies={moviesCntx.movies}
            setSelectedMovie={setSelectedMovie}
          />
          <PaginationComponent />
        </Container>
        <MovieModal
          movie={selectedMovie}
          closeModal={() => {
            setSelectedMovie(null);
          }}
        />
      </>
    ) : null
  );
};
