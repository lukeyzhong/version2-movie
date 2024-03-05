import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import {
  MatDialog,
  MatDialogConfig,
  MatDialogRef,
} from '@angular/material/dialog';
import { TrailerComponent } from './trailer/trailer.component';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';

@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss'],
})
export class MoviedetailsComponent implements OnInit {
  hasBackdrop_img = true;
  background_imge = '';
  type!: string | undefined;
  movie!: any;
  movieVideos: any[] = [];
  actors: any[] = [];
  posters: any[] = [];
  id!: number;
  currentDialogRef!: MatDialogRef<TrailerComponent>;

  constructor(
    private movieService: MovieService,
    private readonly activatedRoute: ActivatedRoute,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param) => {
      // console.log(param);
      this.id = Number(param.get('id'));
    });

    this.getMovieDetails();

    this.movieService
      .getMovieDetails(this.id, 'casts')
      .subscribe((data: any) => {
        this.actors =
          // console.log(data.cast);
          data.cast.map((actor: any): any => {
            const profile_path = actor.profile_path
              ? this.movieService.getMovieImagePath(actor.profile_path, 'w500')
              : '';
            return { ...actor, profile_path };
          });
      });

      this.movieService
      .getMovieDetails(this.id, 'images')
      .subscribe((data: any) => {
        // console.log(data.backdrops);
        
        this.posters =
          data.backdrops.map((image: any): any => {
            const file_path = image.file_path
              ? this.movieService.getMovieImagePath(image.file_path, 'w500')
              : '';
            return { ...image, file_path };
          });
      });


  }

  openDialog(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.hasBackdrop = true;
    dialogConfig.closeOnNavigation = true;

    const dialogRef = this.dialog.open(TrailerComponent, {
      data: {
        movieVideos: this.movieVideos,
        hasbackdrop_img: this.hasBackdrop_img,
        background_imge: this.background_imge,
      },
      maxWidth: '100vw',
    });
    this.currentDialogRef = dialogRef;
  }

  private getMovieDetails() {
    this.movieService.getMovieDetails(this.id).subscribe((data: any) => {
      this.movie = data;
      this.type = this.movie.genres
        ?.map((genre: { name: any }) => genre.name)
        .join(', ');
      // console.log(this.movie);

      if (this.movie.backdrop_path) {
        this.background_imge = this.movieService.getMovieImagePath(
          this.movie.backdrop_path,
          'original'
        );
        this.hasBackdrop_img = true;
      } else {
        this.background_imge = '';
        this.hasBackdrop_img = false;
      }


      // this.posters = this.activatedRoute.snapshot.data['posters'].map((backdrop: any): any => {
      //   const file_path = backdrop.file_path? this.movieService.getMovieImagePath(backdrop.file_path, 'w500') : '';
      //   return {...backdrop, file_path};
      // })
    });
  }

  ngOnDestroy(): void {
    if (this.currentDialogRef && this.currentDialogRef.componentInstance) {
      this.currentDialogRef.close();
    }
  }
}
