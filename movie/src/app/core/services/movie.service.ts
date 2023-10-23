import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movieImgUrl = "https://image.tmdb.org/t/p";
  baseUrl = "https://api.themoviedb.org/3";
  discoverPath = "/discover/movie/?";
  detailsPath = "/movie/?";
  key = "52f2c3eb2e2dc80c673eb869ce50556a";

  keys = {
    api_key: this.key,
    page: 1
  }

  constructor(private http: HttpClient) { }

  // getMovieImagePath(path: string, quality: string): string {
  //   return [this.movieImgUrl, quality, path].join('/');
  // }

  getMovies() {
    const keystr = Object.entries(this.keys).reduce((acc, [key, val]) => {
      return acc + key + '=' + val + '&'
    }, '');
    console.log(keystr);
    return this.http.get(this.baseUrl + this.discoverPath + keystr + '2');
  }

  gotoNext() {
    this.keys.page += 1;
    const keystr = Object.entries(this.keys).reduce((acc, [key, val]) => {
      return acc + key + '=' + val + '&'
    }, '');
    console.log(keystr);
    return this.http.get(this.baseUrl + this.discoverPath + keystr);
  }

  getMovieDetails(id: any): any {

    return this.http.get<any>(this.movieImgUrl + this.detailsPath + this.key).pipe(
      map((res: any) => {
        return {
          homepage: res.homepage,
          id: res.id,
          title: res.title,
          poster: this.movieImgUrl + 'w500/' + res.poster_path,
          backdrop: this.movieImgUrl + 'original/' + res.backdrop_path,
          year: res.release_date.slice(0, 4),
          rating: res.vote_average,
          vote_count: res.vote_count,
          language: res.original_language,
          overview: res.overview,
        };
      })
    );
  }
}
