import { Attendee } from "./class_Attendee";
import { Mentor } from "./class_Mentor";
import { Conference } from "./class_Conference";

export class Register {
	private _listOfEvents: Conference[];
	private _listOfMentors: Mentor[];
	private _listOfStudents: Attendee[];

	constructor() {
		this._listOfEvents = [];
		this._listOfMentors = [];
		this._listOfStudents = [];
	}

	// -------------------------------- getters ---------------------------------
	public get students() {return this._listOfStudents;}
	public get mentors() {return this._listOfMentors;}
	public get events() {return this._listOfEvents;}

	// ---------------------------- private methods -----------------------------

	private checkPassword = (newPassword: string, mentor: Mentor): boolean => {
		return newPassword === mentor.password;
	}

	private hasEmail(email: string): boolean {
		const bool1 = this._listOfMentors.every(mentor => email !== mentor.email);
		const bool2 = this._listOfStudents.every(student => email !== student.email);

		return bool1 && bool2;
	}

	// ----------------------------- public methods -----------------------------

	public addEvent(startDate: string, endDate: string) {
		// check if user is mentor
		console.log('To add a conference you must be a Mentor. Insert email and password');

		/* user is mentor: yes -> allow to create
		no -> deny creation
		mentor has an event between the start and end date of new event ?
		 */
	}

	public addMentor(
		mentorName: string, 
		mentorEmail: string, 
		mentorPassword: string) {
		if (this.hasEmail(mentorEmail)) {
			console.log('This email is already registered');
		} else {
			const newMentor = new Mentor(mentorName, mentorEmail, mentorPassword);
			this._listOfMentors.push(newMentor);
			console.log('New mentor saved');
		}
	}

	public addStudent(studentName: string, studentEmail: string): void {
		if (this.hasEmail(studentEmail)) {
			console.log('This email is already registered');
		} else {
			const newStudent = new Attendee(studentName, studentEmail);
			this._listOfStudents.push(newStudent);
			console.log('New student saved');
		}
	}
}