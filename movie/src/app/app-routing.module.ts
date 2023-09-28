import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovielistComponent } from './home/movielist/movielist.component';
import { MoviedetailsComponent } from './home/moviedetails/moviedetails.component';
import { LoginComponent } from './login/login/login.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./home/home.module').then((_) => (_.HomeModule))},
  {path: 'login', component: LoginComponent},
  {path: 'register', loadChildren: () => import('./login/login.module').then((_) => (_.LoginModule))},
  // {path: 'movielist', component: MovielistComponent},
  {path: 'movielist/:id', component: MoviedetailsComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
