import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { MovielistComponent } from './movielist/movielist.component';
import { MovieitemComponent } from './movielist/movieitem/movieitem.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { TrailerComponent } from './moviedetails/trailer/trailer.component';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'movielist', component: MovielistComponent, canActivate: [AuthGuard] },
  { path: 'movielist/:id', component: MoviedetailsComponent,  canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    HomePageComponent,
    MovielistComponent,
    MovieitemComponent,
    MoviedetailsComponent,
    TrailerComponent,
  ],
  imports: [
    CommonModule,
    InfiniteScrollModule,
    MatIconModule,
    MatCardModule,
    MatDialogModule,
    RouterModule.forChild(routes),
    YouTubePlayerModule,
    SharedModule
  ],
  exports: [
    HomePageComponent,
    MovielistComponent,
    MovieitemComponent,
    MoviedetailsComponent,
    TrailerComponent,
  ],
})
export class HomeModule {}
