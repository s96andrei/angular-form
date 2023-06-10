import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.css']
})
export class PasswordGeneratorComponent {
  length = 0;
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  password = "";

  onChangeLength(event: any) {
    const value = event.target.value;
    const parsedValue = parseInt(value);
    
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
    // console.log(this.length) 
  }

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onButtonClick() {
    // Update the value of the password
    // this.password = "my password app";
    // console.log(`
    //   Password will contain:
    //   letters: ${this.includeLetters}
    //   numbers: ${this.includeNumbers}
    //   symbols: ${this.includeSymbols}
    // `);

    const numbers = "1234567890"
    const letters = "abcdefghijklmnopqrstuvwyz"
    const symbols = "!@#$%^&*()"

    let validChars = "";
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = ""; 
    for (let i=0; i<this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }

    this.password = generatedPassword;
  }
  
  getSuccesMessage() {
    return "Your password was generated";
  }
}
