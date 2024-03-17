import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { RegisterThridComponent } from './register-thrid/register-thrid.component';

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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
