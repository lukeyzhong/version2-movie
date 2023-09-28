import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterThridComponent } from './register-thrid/register-thrid.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RegisterFirstComponent,
    // children: [
    //   { path: '1', component: RegisterFirstComponent },
    //   { path: '2', component: RegisterSecondComponent },
    //   { path: '3', component: RegisterThridComponent },
    // ],
  },
];

@NgModule({
  declarations: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent,
    RegisterThridComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    LoginComponent,
    RegisterFirstComponent,
    RegisterSecondComponent,
    RegisterThridComponent,
  ],
})
export class LoginModule {}
