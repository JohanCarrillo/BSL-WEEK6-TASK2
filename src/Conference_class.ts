import { Mentor } from './Mentor_class';
import { Attendee } from './Attendee_class';

export class Conference {

	mentor: Mentor;
	attendees: (Attendee | Mentor)[];
	// startDate: Date;
	// endDate: Date;
	startDate: string;
	endDate: string;
	students: Attendee[];

	constructor(
		myMentor: Mentor,
		myStartDate: string,
		myEndDate: string,
		// myStartDate: Date,
		// myEndDate: Date,
		myStudents: Attendee[]
	) {
		this.mentor = myMentor;
		this.attendees = [this.mentor];
		this.startDate = myStartDate;
		this.endDate = myEndDate;
		this.students = myStudents;
	}

	// private dateFormatMessage():void {
	// 	console.log('The format to store a date is: YYYY/MM/DD');
	// }

	public getMentor = (): void => {console.log(this.mentor)}

	public addAttendee = (newAttendee: Attendee): void => {
		this.students.length < 20 ?
		this.attendees.push(newAttendee) :
		console.log('This conference is full');
	}

	public showAttendees = (): void => {console.log(this.attendees)}
}