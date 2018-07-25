import { Injectable } from '@angular/core';
import { moviesList } from 'sample-movies';

interface Movie {
  id: number;
  title: string;
  poster: string;
  synopsis: string;
  genres: Array<string>;
  year: number;
  director: string;
  actors: Array<string>;
  hours: Array<string>;
  room: number;
}

@Injectable()

export class MovieService {
  movies: Array<Movie> = moviesList;

  getMovies() {
    return this.movies;
  }

  getMovie(id) {
    return this.movies.find(e => e.id === id);
  }

}

