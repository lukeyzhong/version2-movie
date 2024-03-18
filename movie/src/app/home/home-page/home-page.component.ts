import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email!: string;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  NagivateToSignup(){
    if(this.email) {
      this.router.navigate(['/register/firstpage']);
    }

  }

}
