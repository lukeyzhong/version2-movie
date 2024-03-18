import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class RegisterSecondComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',[Validators.required]),
    // api_key: new FormControl('',[Validators.required])
  })

  get username() {
    return this.form.get('username');
  }

  get apikey() {
    return this.form.get('api_key');
  }

  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.router.navigate(['register/thirdpage']);
    this.authService.regObj = {...this.authService.regObj, username: this.username?.value};
    console.log(this.authService.regObj);
  }
}
