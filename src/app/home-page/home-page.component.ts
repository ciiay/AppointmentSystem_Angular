import { Component, OnInit } from '@angular/core';
import { AppointmentModel } from '../models/appointment.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  appointmentList: AppointmentModel[] = [];
  showNewAppointmentForm: boolean;
  keyword: string;

  constructor() { }

  ngOnInit() {
    this.showNewAppointmentForm = false;
    this.appointmentList = Array<AppointmentModel>();
    this.appointmentList.push(new AppointmentModel(new Date(), 'Something'));
    this.appointmentList.push(new AppointmentModel(new Date(), 'Something else'));
    this.appointmentList.push(new AppointmentModel(new Date(), 'Meet foo'));
  }

  onSearch(): void {
    this.showNewAppointmentForm = false;
  }

  onAddNewAppointment(): void {
    this.showNewAppointmentForm = true;
    const dateFormat = 'M/D/YY';
  }

  onCancelAddingAppointment() {
    this.showNewAppointmentForm = false;
  }

  onAppointmentAdded(newAppointment: AppointmentModel) {
    this.appointmentList.push(newAppointment);
  }

  onCancelAppointment(description: string): void {
    this.appointmentList.forEach((item, index)=> {
      if(item.description = description) {
        this.appointmentList.splice(index,  1);
      }
    })
  }

  descriptionContainsKeyword(description: string): boolean {
    if(description.includes(this.keyword)){
      return true;
    } else {
      return false;
    }
  }

}
