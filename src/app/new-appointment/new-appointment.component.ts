import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { DatePickerComponent } from "ng2-date-picker";
import { AppointmentModel } from "../models/appointment.model";

@Component({
  selector: "app-new-appointment",
  templateUrl: "./new-appointment.component.html",
  styleUrls: ["./new-appointment.component.css"]
})
export class NewAppointmentComponent implements OnInit {
  
  @Output() cancelAddingAppointment: EventEmitter<any> = new EventEmitter();
  @Output() appointmentAdded: EventEmitter<AppointmentModel> = new EventEmitter<AppointmentModel>();
  @Output() showMessage: EventEmitter<string> = new EventEmitter();

  selectedDate: Date;
  description: string;

  constructor() {}

  ngOnInit() {}

  onAddAppointment() {
    if(!this.selectedDate || !this.description || this.description.trim() === "") {
      this.showMessage.emit("Can not be empty.");
    } else if (this.selectedDate.valueOf() < new Date().valueOf()) {
      this.showMessage.emit("Can not set past date.");
    } else {
      this.appointmentAdded.emit(
        new AppointmentModel(this.selectedDate, this.description)
      );
      this.selectedDate = null;
      this.description = "";
    }
  }

  onCancel() {
    this.cancelAddingAppointment.emit();
  }
}
