import { Attendee } from "./Attendee_class";
import { Mentor } from "./Mentor_class";
import { Conference } from "./Conference_class";


export class Register {  // we check all unique conditions here
	listOfEvents: Conference[];
	listOfMentors: Mentor[];
	listOfStudents: Attendee[];
	//listOfPeople: (Mentor | Attendee)[];

	constructor() {
		this.listOfEvents = [];
		this.listOfMentors = [];
		this.listOfStudents = [];
		//this.listOfPeople = [];
	}

	private checkPassword = (newPassword: string, mentor: Mentor): boolean => {
		return newPassword === mentor.password;
	}

	private hasEmail(email: string): boolean {
		this.listOfMentors.forEach(mentor => {
			if (email === mentor.email) return true;
		})
		this.listOfStudents.forEach(student => {
			if (email === student.email) return true;
		});

		return false;
	}

	addEvent(startDate: string, endDate: string) {
		// check if user is mentor
		console.log('To add a conference you must be a Mentor. Insert email and password');

		/* user is mentor: yes -> allow to create
		no -> deny creation
		mentor has an event between the start and end date of new event ?
		 */
	}
	addMentor(mentorName: string, mentorEmail: string, mentorPassword: string) {
		if (this.hasEmail(mentorEmail)) {
			console.log('This email is already registered');
		} else {
			const newMentor = new Mentor(mentorName, mentorEmail, mentorPassword);
			this.listOfMentors.push(newMentor);
			console.log('New mentor saved');
		}
	}
	addStudent(studentName: string, studentEmail: string): void {
		if (this.hasEmail(studentEmail)) {
			console.log('This email is already registered');
		} else {
			const newStudent = new Attendee(studentName, studentEmail);
			this.listOfStudents.push(newStudent);
			console.log('New student saved')
		}
	}
}