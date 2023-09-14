import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-movieitem',
  templateUrl: './movieitem.component.html',
  styleUrls: ['./movieitem.component.scss']
})
export class MovieitemComponent implements OnInit {
  @Input() movie: any;
  imgUrl = "https://image.tmdb.org/t/p/w440_and_h660_face";

  constructor() { }

  ngOnInit(): void {
    
  }

}
