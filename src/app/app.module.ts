import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewAppointmentComponent } from './new-appointment/new-appointment.component';
import { FormsModule } from '@angular/forms';
import { DpDatePickerModule } from 'ng2-date-picker';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NewAppointmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DpDatePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
