import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFirstComponent } from './register-first/register-first.component';
import { RegisterSecondComponent } from './register-second/register-second.component';
import { RegisterThridComponent } from './register-thrid/register-thrid.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RegisterRoutingModule } from './register.routing.module';


@NgModule({
  declarations: [
    RegisterFirstComponent,
    RegisterSecondComponent,
    RegisterThridComponent,
  ],
  imports: [
    RegisterRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
  ],
  exports: []
})
export class RegisterModule {}
