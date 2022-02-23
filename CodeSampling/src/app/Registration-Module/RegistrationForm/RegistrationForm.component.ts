import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { delay } from 'rxjs';


@Component({
  selector: 'app-RegistrationForm',
  templateUrl: './RegistrationForm.component.html',
  styleUrls: ['./RegistrationForm.component.css']
})
export class RegistrationFormComponent implements OnInit {

  AlphaNumeric:string = "^[0-9_-]{10,12}$";
  
  
  FirstnameControl:FormControl = new FormControl('',[Validators.required])
  LastnameControl:FormControl = new FormControl('',[Validators.required])
  EmailAddressControl:FormControl = new FormControl('',[Validators.required,Validators.email])
  UserNameControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(8),this.UserNameValidator(),this.WhiteSpaceValidator()])
  PasswordControl:FormControl = new FormControl('',[Validators.required,Validators.minLength(10),this.PasswordValidator()])
  RegistrationForm:FormGroup=new FormGroup({});
  
  constructor(private snack: MatSnackBar, private router: Router) { }

  ngOnInit() {
      this.RegistrationForm = new FormGroup({
        FirstName: this.FirstnameControl,
        LastName:this.LastnameControl ,
        EmailAddress: this.EmailAddressControl ,
        UserName:this.UserNameControl,
        Password:this.PasswordControl
    
      });
      
  }

  submit(){
    this.snack.open('You have been successfully registered, you will be routed to login','',{duration:4500});
    setTimeout(() =>{
      this.router.navigateByUrl('/login')
    },5000 )
  }

    UserNameValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
  
      const alpha:RegExp = /[a-zA-Z]/;
      const numeric:RegExp = /[0-9]/;
      const missingAlpha = alpha.test(control.value);
      const missingNumeric = numeric.test(control.value);
  
      return !(missingAlpha && missingNumeric) ? {missingAlphaNumeric: {value: control.value}} : null;
    };
  }
  
    PasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
  
      const alphaUpper:RegExp = /[A-Z]/;
      const alphaLower:RegExp = /[a-z]/;
      const numeric:RegExp = /[0-9]/;
      const special:RegExp = /[!@#$%^&*=_+?]/
      const missingAlphaUpper = alphaUpper.test(control.value);
      const missingAlphaLower = alphaLower.test(control.value);
      const missingspecial = special.test(control.value);
      const missingNumeric = numeric.test(control.value);
  
      return !(missingAlphaUpper&& missingAlphaLower && missingNumeric && missingspecial) ? {weakPassword: {value: control.value}} : null;
    };
  }

  WhiteSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
  
      const isWhitespace = control.value.includes(' ') ;
      
  
      return isWhitespace ? {whiteSpace: {value: control.value}} : null;
    };
  }

}
