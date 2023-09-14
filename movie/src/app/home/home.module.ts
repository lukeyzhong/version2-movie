import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieitemComponent } from './movielist/movieitem/movieitem.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [
    HomePageComponent,
    MovielistComponent,
    MovieitemComponent
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
  ],
  exports:[
    HomePageComponent,
    MovielistComponent,
    MovieitemComponent
  ]
})
export class HomeModule { }
