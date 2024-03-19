import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  email!: string;

  constructor(private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  NagivateToSignup(){
    this.authService.regObj = {...this.authService.regObj, email: this.email };
    console.log(this.authService.regObj);
    if(this.email) {
      this.router.navigate(['/register/firstpage']);
    }

  }

}
