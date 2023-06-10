import { PasswordGeneratorComponent } from './../password-generator/password-generator.component';
import { SignInData } from './../model/signInData';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from '../service/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private authenticationService: AuthenticationService) {

  }


onSubmit(signInForm: NgForm){
  console.log(signInForm.value)
  const signInData = new SignInData(signInForm.value.email, signInForm.value.password)
  this.authenticationService.authenticate(signInData);
}
}
