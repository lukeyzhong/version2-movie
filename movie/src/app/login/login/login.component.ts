import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginResponse } from 'src/app/core/interfaces/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userObj: any = {};
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
    this.authService.onLogin(this.userObj).subscribe(
      (response: LoginResponse) => {
        const token = response.accessToken;
        localStorage.setItem('jwt_token', token);
        this.authService.setJwtToken(token);
        this.router.navigate(['/movielist']);
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
