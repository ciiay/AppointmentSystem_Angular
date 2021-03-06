import { Component, OnInit } from "@angular/core";
import { AppointmentModel } from "../models/appointment.model";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit {
  appointmentList: AppointmentModel[] = [];
  showNewAppointmentForm: boolean;
  showTable: boolean = false;
  keyword: string = "";
  input: string = "";
  message: string = "";
  showMessage: boolean = false;

  constructor() {}

  ngOnInit() {
    this.showNewAppointmentForm = false;
    this.appointmentList = Array<AppointmentModel>();
    this.appointmentList.push(new AppointmentModel(new Date(), "Something"));
    this.appointmentList.push(
      new AppointmentModel(new Date(), "Something else")
    );
    this.appointmentList.push(new AppointmentModel(new Date(), "Meet foo"));
  }

  onSearch(): void {
    this.showTable = true;
    this.keyword = this.input;
  }

  onAddNewAppointment(): void {
    this.showNewAppointmentForm = true;
    const dateFormat = "M/D/YY";
  }

  onCancelAddingAppointment() {
    this.showMessage = false;
    this.showNewAppointmentForm = false;
  }

  onAppointmentAdded(newAppointment: AppointmentModel) {
    this.showTable = true;
    this.appointmentList.push(newAppointment);
    this.showMessage = false;
  }

  onCancelAppointment(description: string): void {
    this.appointmentList.forEach((item, index) => {
      if ((item.description === description)) {
        this.appointmentList.splice(index, 1);
      }
    });
  }

  descriptionContainsKeyword(description: string): boolean {
    if (this.keyword === "") {
      return true;
    }

    if (description.toLowerCase().indexOf(this.keyword.toLowerCase()) === -1) { 
      return false;
    } else {
      return true;
    }
  }

  onShowMessage(newMessage: string) {
    this.showMessage = true;
    this.message = newMessage;
  }
}
