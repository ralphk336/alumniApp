import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllAlumniComponent } from './all-alumni/all-alumni.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { AlumniBetweenComponent } from './alumni-between/alumni-between.component';
import { CustomizeComponentComponent } from './customize-component/customize-component.component';
import { EventSubscribeComponent } from './event-subscribe/event-subscribe.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { HomepageComponent} from './homepage/homepage.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  //{path: '' , component: AllAlumniComponent},
  {path: 'homepage', component: HomepageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login' , component: LoginComponent},
  {path: 'logout' , component: LogoutComponent},
  {path: 'signup' , component: SignupFormComponent},
  {path: 'allAlumni',component: AllAlumniComponent},
  {path: 'allEvents',component: AllEventsComponent},
  { path: 'subscribers/:id', component: SubscribersComponent },
  {path: 'alumniBetween',component: AlumniBetweenComponent},
  {path: 'customize',component: CustomizeComponentComponent},
  {path: 'subscribedEvents',component: EventSubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
