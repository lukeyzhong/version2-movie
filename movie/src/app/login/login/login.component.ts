import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userObj = {};
  loggedinMsg: string =  "";

  loginForm = new FormGroup({
    email: new FormControl('',[Validators.required, Validators.email]),
    password: new FormControl('',[Validators.required]),
  })

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  constructor(private authService: AuthService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  NavigateToSignup(){
    this.router.navigate(['/register/firstpage']);
  }

  onSubmit() {
    this.userObj = {
      email: this.email?.value,
      password: this.password?.value
    }
    this.authService.onLogin(this.userObj);
  }
}
