export class AppointmentModel {
    dateTime: Date;
    description: string;

    constructor(dateTime: Date, description: string) {
        this.dateTime = dateTime || null;
        this.description = description || null;
    }
}