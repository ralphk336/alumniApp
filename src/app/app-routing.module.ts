import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAlumniComponent } from './all-alumni/all-alumni.component';
import { AlumniBetweenComponent } from './alumni-between/alumni-between.component';
import { CustomizeComponentComponent } from './customize-component/customize-component.component';

const routes: Routes = [
  {path: '' , component: AllAlumniComponent},
  {path: 'allAlumni',component: AllAlumniComponent},
  {path: 'alumniBetween',component: AlumniBetweenComponent},
  {path: 'customize',component: CustomizeComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
