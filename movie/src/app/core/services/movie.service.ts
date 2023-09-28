import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieImgUrl = "https://image.tmdb.org/t/p";
  baseUrl = "https://api.themoviedb.org/3/discover/movie/?";
  key = "52f2c3eb2e2dc80c673eb869ce50556a";

  keys = {
    api_key: this.key,
    page: 1
  }

  constructor(private http: HttpClient) { }

  getMovieImagePath(path: string, quality: string): string {
    return [this.movieImgUrl, quality, path].join('/');
  }

  getMovies() {
    const keystr = Object.entries(this.keys).reduce((acc, [key, val]) => {
      return acc + key + '=' + val + '&'
    }, '');
    console.log(keystr);
    return this.http.get(this.baseUrl + keystr + '2');
  }

  gotoNext() {
    this.keys.page += 1;
    const keystr = Object.entries(this.keys).reduce((acc, [key, val]) => {
      return acc + key + '=' + val + '&'
    }, '');
    console.log(keystr);
    return this.http.get(this.baseUrl + keystr);
  }
}
