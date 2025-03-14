export interface IMovie {
    adult: boolean;
    backdropPath: string;
    genres: string[];
    id: number;
    originalLanguage: string;
    originalTitle: string;
    direction: string;
    overview: string;
    popularity: number;
    posterPath: string;
    releaseDate: Date;
    title: string;
    video: boolean;
    voteAverage: number;
    voteCount: number;
}

export interface IMovieSnakeCase {
    adult: boolean;
    backdrop_path: string;
    genres: string[];
    id: number;
    original_language: string;
    original_title: string;
    direction: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export interface IMovieResponse {
    data: any;
}
