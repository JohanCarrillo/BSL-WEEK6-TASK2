import { Mentor } from './class_Mentor';
import { Attendee } from './class_Attendee';

export class Conference {

	private _title: string;
	private _mentor: Mentor;
	startDate: Date;
	endDate: Date;
	private _students: Attendee[];

	constructor(
		title: string,
		mentor: Mentor,
		startDate: string,
		endDate: string,
		students: Attendee[] = []
	) {
		this._title = title;
		this._mentor = mentor;
		this.startDate = new Date(startDate);
		this.endDate = new Date(endDate);
		this._students = students;
	}

	// -------------------------------- getters --------------------------------- 

	public get title() {return this._title;}
	public get mentor() {return this._mentor;}
	public get students() {return this._students;}

	// ----------------------------- public methods -----------------------------

	public addAttendee = (newAttendee: Attendee): string => {
		if (this.students.length <= 20) {
			this.students.push(newAttendee);
			return 'attendee saved';
		}
		else return 'This conference is full';
	}
}