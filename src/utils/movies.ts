import { IMovie, IMovieSnakeCase } from "../types/movies";

export const mapMovies = (
    movies: IMovieSnakeCase[],
    imagesBasePath: string
): IMovie[] =>
    movies.map((movie) => ({
        adult: movie.adult,
        backdropPath: `${imagesBasePath}${movie.backdrop_path}`,
        genres: movie.genres,
        id: movie.id,
        originalLanguage: movie.original_language,
        originalTitle: movie.original_title,
        direction: movie.direction,
        overview: movie.overview,
        popularity: movie.popularity,
        posterPath: `${imagesBasePath}${movie.poster_path}`,
        releaseDate: new Date(movie.release_date),
        title: movie.title,
        video: movie.video,
        voteAverage: movie.vote_average,
        voteCount: movie.vote_count,
    }));
