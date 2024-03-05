import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  movieImgUrl = 'https://image.tmdb.org/t/p';
  baseUrl = 'https://api.themoviedb.org/3';
  discoverPath = '/discover/movie?';
  detailsPath = '/movie/';
  key = '1cc588d3100019cae539cca12aa6e760';

  keys = {
    api_key: this.key,
    page: 1,
  };

  keystr = Object.entries(this.keys).reduce((acc, [key, val]) => {
    return acc + key + '=' + val + '&';
  }, '');

  constructor(private http: HttpClient) {}

  getMovies() {
    return this.http.get(this.baseUrl + this.discoverPath + this.keystr + '2');
  }

  gotoNext() {
    this.keys.page += 1;
    return this.http.get(this.baseUrl + this.discoverPath + this.keystr);
  }

  getMovieDetails(id: number, params: string = ''): any {
    if (!params) {
      return this.http.get(
        this.baseUrl + this.detailsPath + id + '?' + this.keystr
      );
    } else {
      return this.http.get(
        this.baseUrl + this.detailsPath + id + '/' + params + '?' + this.keystr
      );
    }
  }

  getMovieImagePath(path: string, quality: string): string {
    return [this.movieImgUrl, quality, path].join('/');
  }
}
