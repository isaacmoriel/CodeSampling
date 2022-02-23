import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login-Module/Login/Login.component';
import { RegistrationFormComponent } from './Registration-Module/RegistrationForm/RegistrationForm.component';

const routes: Routes = [{path:'login',component:LoginComponent },
  {path:'**',component:RegistrationFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
