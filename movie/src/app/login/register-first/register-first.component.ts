import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-first',
  templateUrl: './register-first.component.html',
  styleUrls: ['./register-first.component.scss']
})
export class RegisterFirstComponent implements OnInit {
  
  form = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  })

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}

}
