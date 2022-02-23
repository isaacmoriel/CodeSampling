import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModuleModule } from './Login-Module/Login-Module.module';
import { RegistrationModule } from './Registration-Module/Registration.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RegistrationModule,
    LoginModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
