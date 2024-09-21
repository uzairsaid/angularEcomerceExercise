
import { NgIf } from '@angular/common';
import { Component} from '@angular/core';
import {FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent{
  constructor(private formBuilder: FormBuilder) {}

  signupForm = this.formBuilder.group({
  name: ['', Validators.required],
  email: ['',
    [Validators.required, Validators.email]
    
  ],
  password: ['',[Validators.required, Validators.minLength(8), Validators.maxLength(16)]],
  confirmPassword: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(16)]]
});

get name() {
  return this.signupForm.get("name");
}
get email() {
  return this.signupForm.get("email");
}
get password() {
  return this.signupForm.get("password");
}
get confirmPassword() {
  return this.signupForm.get("confirmPassword");
}
   
  
 onSubmit():void{
  if (this.signupForm.valid){
    console.log(this.signupForm.value);

  }
 }
}
