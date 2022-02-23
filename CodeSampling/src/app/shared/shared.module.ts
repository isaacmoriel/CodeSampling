import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';



let modules = [CommonModule,ReactiveFormsModule,MatFormFieldModule,MatCardModule,MatButtonModule, MatInputModule];

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
