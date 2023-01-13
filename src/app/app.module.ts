import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TableModule } from 'primeng/table'
import { PaginatorModule } from 'primeng/paginator';

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
    SignupFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgFor,
    HttpClientModule,
    NgIf,
    TableModule,
    PaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
