import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-trailer',
  templateUrl: './trailer.component.html',
  styleUrls: ['./trailer.component.scss']
})
export class TrailerComponent implements OnInit {

  movieVideos: any[] = [];
  hasBackdrop_img = true;
  background_imge = '';

  constructor(
    private dialogRef: MatDialogRef<TrailerComponent>,
    @Inject(MAT_DIALOG_DATA) 
    private data: any) {}

  ngOnInit(): void {
    this.movieVideos = this.data.movieVideos;
    this.hasBackdrop_img = this.data.hasBackdrop_img;
    this.background_imge = this.data.background_imge;

    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  close():void {
    this.dialogRef.close();
  }

  switchVideo(direction: string) {
    // console.log("movieVideo", this.movieVideos);
    if (direction === 'left' && this.movieVideos.length) {
      const removedVideo: any = this.movieVideos.shift() as any; 
      this.movieVideos.push(removedVideo); //add to the tail
    } else if (direction === 'right' && this.movieVideos.length) {
      const removedVideo: any = this.movieVideos.pop() as any;
      this.movieVideos.unshift(removedVideo); //add to the beginning of video list
    }
  }

}
