import { Dispatch, FunctionComponent, SetStateAction } from "react";
import { IMovie } from "../types/movies";
import { Button } from "react-bootstrap";

export const Card: FunctionComponent<{
  movie: IMovie;
  setSelectedMovie: Dispatch<SetStateAction<IMovie | null>>;
  removeFromList?: (id: number) => void;
}> = ({ movie, setSelectedMovie, removeFromList }) => {

  const movieYear: number | string =
    new Date(movie.releaseDate).getFullYear() || "N/A";

  return (
    <div
      className="card movie-card"
      onClick={() => {
        setSelectedMovie(movie);
      }}
    >
      <img className="card-img-top poster" src={movie.posterPath} alt="movie-poster" />
      <div className="card-body text-center">
        <div className="card-title title font-weight-bold fs-3 fw-bold">
          {movie.title}
        </div>
        <p className="fs-5 movie-year">{movieYear}</p>
        <p className="fs-5 movie-genres">{movie.genres ? movie.genres.map(genre => genre.name).join(", ") : []}</p>
        <div className="card-text overview">{movie.overview}</div>
        {removeFromList ? (
          <div className="mt-4">
              <Button variant="danger" onClick={(event) => {
                event?.stopPropagation();
                removeFromList(movie.id)
              }}>Remove movie from the list</Button>
          </div>
        ) : null
        }
      </div>
    </div>
  );
};
