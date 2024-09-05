import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SignupComponent } from './signup/signup.component';




@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
  ],

})
export class AppModule { }
