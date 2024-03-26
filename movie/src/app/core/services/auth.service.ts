import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../interfaces/user.model';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // apiUrl: string = 'http://localhost:4231';
  apiUrl: string = 'http://localhost:3241';
  signUp: string = 'signup';
  LogIn: string = 'signin';
  regObj: any = {};

  private jwtTokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  jwtToken$: Observable<string | null> = this.jwtTokenSubject.asObservable();

  setJwtToken(token: string| null) {
    this.jwtTokenSubject.next(token);
  }

  constructor(private http: HttpClient) {}

  onSignup(userInfo: any) {
    return this.http.post(this.apiUrl + '/auth' + '/' + this.signUp, userInfo);
  }

  onLogin(userInfo: LoginResponse) {
    return this.http
      .post<LoginResponse>(this.apiUrl + '/auth' + '/' + this.LogIn, userInfo);
  }
}
