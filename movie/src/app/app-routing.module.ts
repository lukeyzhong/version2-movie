import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then((_) => (_.HomeModule))},
  {path: 'login', loadChildren: () => import('./login/login.module').then((_) => (_.LoginModule))}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
