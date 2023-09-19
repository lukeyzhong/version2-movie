import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Observable, debounceTime, map } from 'rxjs';

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

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(
        '',
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

  onSubmit() {}
}
