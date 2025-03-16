import { IMovie, IMovieSnakeCase } from "./movies";

export interface IList {
  description: string;
  favorite_count: number;
  item_countr: number;
  name: string;
  poster_path: string;
  id: number;
}

export interface IListDetails {
  name: string;
  description: string;
}

export interface IListsResponse {
  data: {
    results: IList[]
  }
}

export interface IListsMoviesResponse {
  description: string;
  id: string;
  name: string;
  items: IMovieSnakeCase[];
}

export interface IListsMovies {
  description: string;
  id: string;
  name: string;
  items: IMovie[];
}

