import { Component } from '@angular/core';
import {FormControl,FormGroup, Validators} from '@angular/forms';
import { Validator } from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  signupForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', Validators.email),
    password: new FormControl(''),
    confirmPassword: new FormControl('')
  });

 onSubmit():void{
  if (this.signupForm.valid) {
    console.log("is valid");
  }
  else{
    console.log("is valid");
  }
 }

}
