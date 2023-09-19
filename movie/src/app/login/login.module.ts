import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterThridComponent } from './register-thrid/register-thrid.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent,
    RegisterThridComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent,
    RegisterThridComponent
  ]
})
export class LoginModule { }
