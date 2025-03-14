import React, { Dispatch, FunctionComponent, SetStateAction } from "react";
import { IMovie } from "../types/movies";

export const Card: FunctionComponent<{
    movie: IMovie;
    setSelectedMovie: Dispatch<SetStateAction<IMovie | null>>;
}> = ({ movie, setSelectedMovie }) => {
    const movieYear: number | string =
        new Date(movie.releaseDate).getFullYear() || "N/A";
    return (
        <div
            className="card movie-card"
            onClick={() => {
                setSelectedMovie(movie);
            }}
        >
            <img className="card-img-top poster" src={movie.posterPath} />
            <div className="card-body text-center">
                <div className="card-title title font-weight-bold fs-3 fw-bold">
                    {movie.title}
                </div>
                <p className="fs-5 movie-year">{movieYear}</p>
                <p className="fs-5 movie-genres">{movie.genres ? movie.genres.join("/") : []}</p>
                <div className="card-text overview">{movie.overview}</div>
            </div>
        </div>
    );
};
