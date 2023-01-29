import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAlumniComponent } from './all-alumni/all-alumni.component';
import { AlumniBetweenComponent } from './alumni-between/alumni-between.component';
import { CustomizeComponentComponent } from './customize-component/customize-component.component';
import { LoginComponent } from './login/login.component';
import { SignupFormComponent } from './signup-form/signup-form.component';

const routes: Routes = [
  //{path: '' , component: AllAlumniComponent},
  {path: 'login' , component: LoginComponent},
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  {path: 'signup' , component: SignupFormComponent},
  {path: 'allAlumni',component: AllAlumniComponent},
  {path: 'alumniBetween',component: AlumniBetweenComponent},
  {path: 'customize',component: CustomizeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
