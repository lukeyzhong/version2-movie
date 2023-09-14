import { Component, OnInit } from '@angular/core';

import { MovieService } from 'src/app/core/movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.scss']
})
export class MovielistComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieservice: MovieService) { }

  ngOnInit(): void {
    this.movieservice.getMovies().subscribe((data: any) => {
      this.movies = data.results;
    })
  }

  onScroll() {
    this.movieservice.gotoNext().subscribe((data: any) => {
      this.movies = [...this.movies, ...data.results];
    })
  }


}
