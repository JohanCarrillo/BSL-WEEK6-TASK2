class Conference {

	mentor: Mentor;
	attendees: (Attendee | Mentor)[];
	startDate: Date;
	endDate: Date;
	students: Attendee[];
	mentor: Mentor;

	private dateFormatMessage():void {
		console.log('The format to store a date is: year/month/day');
	}
}

class Attendee {
	name: string;
	email: string;

	constructor(myName: string, myEmail: string) {
		this.name = myName;
		this.email = myEmail;
	}
}

class Mentor extends Attendee {
	private password: string;
	private listOfEventsImIn: Conference[];

	constructor(myName: string, myEmail: string, myPassword: string) {
		super(myName, myEmail);
		this.password = myPassword;
		//this.listOfEvents = Conference[];
	}

	checkPassword(newPassword: string) {
		return newPassword === this.password;
	}

	addConference(conference: Conference): void {
		// check date compatibility first
		this.listOfEventsImIn.push(conference);
	}

	showEvents(): void {
		console.log(this.listOfEventsImIn);
	}
}

class Library {
	listOfEvents: Conference[];
	// listOfMentors: Mentor[];
	// listOfStudents: Attendee[];
	listOfPeople: (Mentor | Attendee)[];

	private hasEmail(attendee: (Attendee | Mentor)): boolean {
		this.listOfPeople.forEach(person => {
			if (attendee.email === person.email) return true;
		});
		return false;
	}

	addEvent() {
		/* user is mentor: yes -> allow to create
		no -> deny creation
		 */
	}
	addMentor() {
		/* 
			contain email == false: listOfPeople.push(newPerson)
			else show message 'email in use
		*/
	}
	addStudent() {
		/* 
			contain email == false: listOfPeople.push(newPerson)
			else show message 'email in use
		*/
	}
}