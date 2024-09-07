
import { Component} from '@angular/core';
import {FormBuilder,ReactiveFormsModule, Validators} from '@angular/forms';



@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    ReactiveFormsModule,
  
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {
  constructor(private formBuilder: FormBuilder) {
  }

  signupForm = this.formBuilder.group({
  name: ['', Validators.required],
  email: ['', Validators.email],
  password: [''],
  confirmPassword: ['']
});
   
  
 onSubmit():void{
  if (this.signupForm.valid){
    console.log(this.signupForm.value);

  }
 }
}
