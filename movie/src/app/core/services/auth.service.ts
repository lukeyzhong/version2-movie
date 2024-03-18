import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginResponse } from '../interfaces/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http://localhost:4231';
  signUp: string = 'signup';
  LogIn: string = 'signin';
  regObj = {};

  constructor(private http: HttpClient, 
    private router: Router) {}

  onSignup(userInfo: any) {
    return this.http.post(this.apiUrl + '/auth' + '/' + this.signUp, userInfo);
  }

  onLogin(userInfo: LoginResponse) {
    return this.http
      .post<LoginResponse>(this.apiUrl + '/auth' + '/' + this.LogIn, userInfo);
  }
}
