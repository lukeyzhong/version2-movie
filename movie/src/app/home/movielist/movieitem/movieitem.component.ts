import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss']
})
export class MovieitemComponent implements OnInit {
  @Input() movie: any;
  imgUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }
  gotoDetails(){
    this.router.navigate(['movielist', this.movie.id]);
  }

}
