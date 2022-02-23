import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RegistrationFormComponent } from './RegistrationForm/RegistrationForm.component';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [RegistrationFormComponent]
})
export class RegistrationModule { }
