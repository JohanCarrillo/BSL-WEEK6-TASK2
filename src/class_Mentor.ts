import { Attendee } from './class_Attendee';
import { Conference } from './class_Conference';

export class Mentor extends Attendee {
	private _password: string;
	private _listOfEvents: Conference[];

	constructor(myName: string, myEmail: string, password: string) {
		super(myName, myEmail);
		this._password = password;
		this._listOfEvents = [];
	}

	// -------------------------------- getters --------------------------------- 

	public get password() {return this._password;}

	// ----------------------------- public methods -----------------------------

	public addConference = (conference: Conference): void => {
		this._listOfEvents.push(conference)
	}

	public showEvents(): void {
		if (this._listOfEvents.length === 0) {
			console.log('No events');
		} else {
			this._listOfEvents.forEach(event => {
				console.log(`${event.title}:
				from ${event.startDate.getDate()}/${event.startDate.getMonth() + 1} to ${event.endDate.getDate()}/${event.endDate.getMonth() + 1},`)
			});
		}
	}
}