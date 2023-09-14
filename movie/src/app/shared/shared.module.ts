import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HeaderRegisterComponent } from './header-register/header-register.component';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderRegisterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    HeaderRegisterComponent
  ]
})
export class SharedModule { }
