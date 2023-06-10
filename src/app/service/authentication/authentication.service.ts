import { Injectable } from '@angular/core';
import { SignInData } from 'src/app/model/signInData';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private readonly mockedUser = new SignInData("username@mail.com", "test123");
  isAuthenticated = false

  constructor() {}

    authenticate(signInData: SignInData):boolean {
      if(this.checkCredentials(signInData)) {
        this.isAuthenticated = true;
        return true;
      }
      this.isAuthenticated = false;
      return false;
    }
   

    private checkCredentials(signInData: SignInData): boolean {
      return this.checkEmail(signInData.getEmail()) && this.checkPassword(signInData.getPassword())
    }

    private checkEmail(email: string): boolean {
      return email === this.mockedUser.getEmail()
    }

    private checkPassword(password: string): boolean {
      return password === this.mockedUser.getPassword()
    }
}
