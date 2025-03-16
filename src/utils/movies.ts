import { IMovie, IMovieSnakeCase } from "../types/movies";

export const mapMovie = (
    movie: IMovieSnakeCase,
    imagesBasePath: string
): IMovie => ({
    adult: movie.adult,
    backdropPath: `${imagesBasePath}${movie.backdrop_path}`,
    genres: movie.genres,
    budget: movie.budget,
    runtime: movie.runtime,
    revenue: movie.revenue,
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
});

export const mapMovies = (
    movies: IMovieSnakeCase[],
    imagesBasePath: string
): IMovie[] =>
    movies.map((movie) => (mapMovie(movie, imagesBasePath)));
