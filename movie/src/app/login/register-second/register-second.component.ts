import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register-second',
  templateUrl: './register-second.component.html',
  styleUrls: ['./register-second.component.scss']
})
export class RegisterSecondComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl(),
    api_key: new FormControl()
  })

  get username() {
    return this.form.get('username');
  }

  get api_key() {
    return this.form.get('api_key');
  }

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {}
}
