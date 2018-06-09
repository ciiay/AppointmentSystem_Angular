import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ViewChild
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
  @Output() showMessage: EventEmitter<any> = new EventEmitter();

  selectedDate: Date;
  description: string;

  constructor() {}

  ngOnInit() {}

  onAddAppointment() {
    if (this.selectedDate.valueOf() < new Date().valueOf()) {
      this.showMessage.emit();
    } else {
      this.appointmentAdded.emit(
        new AppointmentModel(this.selectedDate, this.description)
      );
    }
  }

  onCancel() {
    this.cancelAddingAppointment.emit();
  }
}
