import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterSecondComponent } from './register-second/register-second.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent
  ]
})
export class LoginModule { }
