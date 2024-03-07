import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFirstComponent } from '../register/register-first/register-first.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterSecondComponent } from '../register/register-second/register-second.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterThridComponent } from '../register/register-thrid/register-thrid.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  exports: [
    LoginComponent,
  ],
})
export class LoginModule {}
