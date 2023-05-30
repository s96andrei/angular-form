import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { PasswordGeneratorComponent } from './password-generator/password-generator.component';


const appRoute: Routes = [
  // { path:'', component:PasswordGeneratorComponent},
  { path:'', redirectTo: 'home', pathMatch:'full'}, 
  { path: 'home', component: PasswordGeneratorComponent },
  { path: 'form', component: FormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
