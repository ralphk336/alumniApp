import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator';
import {CardModule} from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import {MenubarModule } from 'primeng/menubar'
import { InputTextModule } from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {FileUploadModule} from 'primeng/fileupload';
import {ToastModule} from 'primeng/toast';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { CanvasComponent } from './canvas/canvas.component';
import { AlumniBetweenComponent } from './alumni-between/alumni-between.component';
import { AllAlumniComponent } from './all-alumni/all-alumni.component';
import { AdminSidebarDesktopComponent } from './admin-sidebar-desktop/admin-sidebar-desktop.component';
import { AdminSidebarMobileComponent } from './admin-sidebar-mobile/admin-sidebar-mobile.component';
import { AdminHomepageComponent } from './admin-homepage/admin-homepage.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { EventSubscribeComponent } from './event-subscribe/event-subscribe.component';
import { AlumnusSidebarMobileComponent } from './alumnus-sidebar-mobile/alumnus-sidebar-mobile.component';
import { AdminMenubarComponent } from './admin-menubar/admin-menubar.component';
import { CustomizeComponentComponent } from './customize-component/customize-component.component';
import { LoginComponent } from './login/login.component';
import { ResetComponent } from './reset/reset.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AlumnusMenubarComponent } from './alumnus-menubar/alumnus-menubar.component';
import { AllEventsComponent } from './all-events/all-events.component';
import { SubscribersComponent } from './subscribers/subscribers.component';
// import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CanvasComponent,
    AlumniBetweenComponent,
    AllAlumniComponent,
    AdminSidebarDesktopComponent,
    AdminSidebarMobileComponent,
    AdminHomepageComponent,
    SignupFormComponent,
    EventSubscribeComponent,
    AlumnusSidebarMobileComponent,
    AdminMenubarComponent,
    CustomizeComponentComponent,
    LoginComponent,
    ResetComponent,
    LogoutComponent,
    HomepageComponent,
    AlumnusMenubarComponent,
    AllEventsComponent,
    SubscribersComponent,
//     LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    HttpClientModule,
    BrowserAnimationsModule,
    NgIf,
    TableModule,
    PaginatorModule,
    CardModule,
    ButtonModule,
    MenubarModule,
    InputTextModule,
    DropdownModule,
    FileUploadModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
