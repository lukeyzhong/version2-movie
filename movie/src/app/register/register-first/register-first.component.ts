import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, debounceTime, map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss'],
})
export class RegisterFirstComponent implements OnInit {
  form!: FormGroup;

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        this.authService.regObj?.email,
        [Validators.required, Validators.email],
        [this.checkEmail]
      ),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
      ]),
    });
  }

  // AsyncValidator:
  checkEmail = (
    control: AbstractControl
  ): Observable<ValidationErrors | null> => {
    const val = control.value;
    const url = `http://localhost:4231/auth/check-email`;
    return this.http.post(url, { email: val }).pipe(
      debounceTime(500),
      map((data: any) => {
        if (data) {
          return { hasEmail: true };
        }
        return null;
      })
    );
  };

  onSubmit() {
    this.router.navigate(['register/secondpage']);
    this.authService.regObj = {...this.authService.regObj, email: this.email?.value, password: this.password?.value};
    console.log(this.authService.regObj);
  }
}
