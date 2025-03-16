import { useContext } from "react";
import { Container } from "react-bootstrap";
import { MovieList } from "../components/MovieList";
import { MovieContext } from "../context/MovieProvider";
import { PaginationComponent } from "../components/Pagination";

export const MainPage = () => {

  const moviesCntx = useContext(MovieContext);

  return (
    moviesCntx?.movies ? ( 
      <>
        <Container className="main-container">
          <h1 className="text-center mt-5 mb-5">Movie List App</h1>
          <MovieList
            movies={moviesCntx.movies}
          />
          <PaginationComponent />
        </Container>
      </>
    ) : null
  );
};
