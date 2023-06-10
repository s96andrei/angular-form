import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';
import { LoginComponent } from './login/login.component';


const appRoute: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: PasswordGeneratorComponent },
  { path: 'form', component: FormComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
