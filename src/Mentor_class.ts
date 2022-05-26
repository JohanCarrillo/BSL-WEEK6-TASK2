import { Attendee } from './Attendee_class';
import { Conference } from './Conference_class';

export class Mentor extends Attendee {
	public password: string;
	private listOfEventsImIn: Conference[];

	constructor(myName: string, myEmail: string, myPassword: string) {
		super(myName, myEmail);
		this.password = myPassword;
		this.listOfEventsImIn = [];
	}

	public showEvents = (): void => {console.log(this.listOfEventsImIn)};

	public createConference = (conference: Conference): void => {this.listOfEventsImIn.push(conference)}
	
}