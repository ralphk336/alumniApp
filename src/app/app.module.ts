import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordionModule } from 'primeng/accordion';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

//import { Checkboxmodule } from 'primeng/checkbox';
//import { RadioButtonModule } from 'primeng/radioButton';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    AccordionModule,
    PanelModule,
    ButtonModule
    //CheckboxModule
    //RadioButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
