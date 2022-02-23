import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import { FlexLayoutModule } from '@angular/flex-layout';




let modules = [CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatCardModule,
  MatButtonModule, 
  MatInputModule,
  MatSnackBarModule,
  FlexLayoutModule];

@NgModule({
  imports: [
    modules
  ],
  exports:[
    modules
  ],
  declarations: []
})
export class SharedModule { }
