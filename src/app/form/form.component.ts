import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { FormGroup, FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  myForm: FormGroup;
  userNameControl: FormControl;
  emailControl : FormControl;
  commentControl: FormControl;
  isSubmitted: boolean = false;

  constructor(private router: Router) {
    this.userNameControl = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(30)]);
    this.emailControl = new FormControl('', [Validators.required, Validators.pattern('^[\\w\\-\\.]+@([\\w\\-]+\\.)+[\\w\\-]{2,4}$')]);
    this.commentControl = new FormControl('', Validators.required);

    this.myForm = new FormGroup({
      name: this.userNameControl,
      email: this.emailControl,
      comment: this.commentControl
      // Initialize more form controls as needed
    });
  }

  onSubmit() {
    // Save form data to local storage

    let formDataArray = JSON.parse(localStorage.getItem('formData') as string) || [];
    
    if (!Array.isArray(formDataArray)) {
      formDataArray = [];
    }
    
    const formData = this.myForm.value;
    console.log(formData, "asad");
    formDataArray.push(formData);
    // localStorage.setItem('formData', JSON.stringify(formData));
    localStorage.setItem('formData', JSON.stringify(formDataArray));

    this.myForm.reset();
    this.isSubmitted = true;

    // Navigate to the home page after 2 seconds
    setTimeout(() => {
      this.router.navigate(['/password']);
    }, 2000);
  }
}
