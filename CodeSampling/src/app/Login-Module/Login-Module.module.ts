import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './Login/Login.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginComponent]
})
export class LoginModuleModule { }
