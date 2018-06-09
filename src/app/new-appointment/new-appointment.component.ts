import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DatePickerComponent } from 'ng2-date-picker';
import { AppointmentModel } from '../models/appointment.model';

@Component({
  selector: 'app-new-appointment',
  templateUrl: './new-appointment.component.html',
  styleUrls: ['./new-appointment.component.css']
})
export class NewAppointmentComponent implements OnInit {

  @ViewChild('dayPicker') datePicker: DatePickerComponent;
  @Output() cancelAddingAppointment: EventEmitter<any> = new EventEmitter();
  @Output() appointmentAdded: EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();
  selectedDate;
  description: string;

  constructor() { }

  ngOnInit() {
  }

  onAddAppointment(){
    this.appointmentAdded.emit(new AppointmentModel(this.selectedDate, this.description));
  }

  onCancel() {
    this.cancelAddingAppointment.emit();
  }

  open() {
    this.datePicker.api.open();
  }

  close() {
    this.datePicker.api.close();
  }

}
