import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiUrl: string = 'http//localhost:4321';
  signUp: string = 'signup';
  LogIn: string = 'login';

  constructor(private http: HttpClient) {}

  onSignup(userInfo: any) {
    return this.http.post(this.apiUrl + 'auth/' + this.signUp, userInfo);
  }

  onLogin(userInfo: any) {
    return this.http
      .post(this.apiUrl + 'auth/' + this.LogIn, userInfo)
      .subscribe((data) => {
        console.log(data);
      });
  }
}
