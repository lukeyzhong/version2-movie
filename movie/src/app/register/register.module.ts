import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { RegisterThridComponent } from './register-thrid/register-thrid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: 'register',
    children: [
      { path: 'firstpage', component: RegisterFirstComponent },
      { path: 'secondpage', component: RegisterSecondComponent },
      { path: 'thirdpage', component: RegisterThridComponent },
    ],
  },
];

@NgModule({
  declarations: [
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
  exports: [RouterModule]
})
export class RegisterModule {}
