import { Attendee } from './class_Attendee';
import { Conference } from './class_Conference';

export class Mentor extends Attendee {
	private _password: string;
	private _listOfEventsImIn: Conference[];

	constructor(myName: string, myEmail: string, password: string) {
		super(myName, myEmail);
		this._password = password;
		this._listOfEventsImIn = [];
	}

	// -------------------------------- getters --------------------------------- 

	public get password() {return this._password;}
	public get eventsTitles() {
		if (this._listOfEventsImIn.length === 0) {
			return 'No events';
		} else {
			return this._listOfEventsImIn;
		}
	}

	// ----------------------------- public methods -----------------------------

	public createConference = (conference: Conference): void => {
		this._listOfEventsImIn.push(conference)
	}
	
	
}