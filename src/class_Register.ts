import { Attendee } from "./class_Attendee";
import { Mentor } from "./class_Mentor";
import { Conference } from "./class_Conference";
import { Menu } from "./class_Menu";

export class Register extends Menu {
	private _listOfEvents: Conference[];
	private _listOfMentors: Mentor[];
	private _listOfStudents: Attendee[];

	constructor() {
		super();
		this._listOfEvents = [];
		this._listOfMentors = [];
		this._listOfStudents = [];
	}

	// -------------------------------- getters ---------------------------------
	public get students() {return this._listOfStudents;}
	public get mentors() {return this._listOfMentors;}
	public get events() {return this._listOfEvents;}

	// ---------------------------- private methods -----------------------------

	private validateEmail(email: string): boolean {
		// true if email is in use
		const bool1 = this._listOfMentors.some(mentor => email === mentor.email);
		const bool2 = this._listOfStudents.some(student => email === student.email);
		return bool1 || bool2;
	}

	private showEvent(event: Conference): void {
		console.log(
			`${event.title}:
				from ${event.startDate.getDate()}/${event.startDate.getMonth() + 1} to ${event.endDate.getDate()}/${event.endDate.getMonth() + 1},
				Mentor ${event.mentor}`);
	}

	// ----------------------------- public methods -----------------------------

	public addConference(
		title: string,
		mentor: Mentor, 
		startDate: Date, 
		endDate: Date): string {
		// must add conference to mentor events list when conference is created
		
		// here we guess the mentor is saved in list
		if (mentor.listOfEvents.length !== 0) {
			const lastConference = mentor.listOfEvents[mentor.listOfEvents.length - 1]
			if (lastConference.endDate < startDate) {  // condition over dates
				const newConference = new Conference(title, mentor, startDate, endDate);
				this._listOfEvents.push(newConference);
				mentor.addConference(newConference);
				return 'Conference saved'
			} else {
				return `The mentor has another event in that date`;
			}
		} else {
			const newConference = new Conference(title, mentor, startDate, endDate);
			this._listOfEvents.push(newConference);
			mentor.addConference(newConference);
			return 'Conference saved'
		}
	}

	public async addMentor(): Promise<void> {

		const mentorName = await super.getString('Inserte nombre del mentor');
		const mentorEmail = await super.getString('Inserte email del mentor');
		const mentorPassword = await super.getString('Inserte password del mentor');

		if (this.validateEmail(mentorEmail)) {
			console.log('This email is already registered');
		} else {
			const newMentor = new Mentor(mentorName, mentorEmail, mentorPassword);
			this._listOfMentors.push(newMentor);
			console.log(`New mentor ${newMentor.name} saved`);
		}
	}

	public async addStudent(): Promise<void> {

		const studentName = await super.getString('Inserte nombre del estudiante');
		const studentEmail = await super.getString('Inserte email del estudiante');

		if (this.validateEmail(studentEmail)) {
			console.log('This email is already registered');
		} else {
			const newStudent = new Attendee(studentName, studentEmail);
			this._listOfStudents.push(newStudent);
			console.log('New student saved');
		}
	}

	public async addStudentToConference(): Promise<void> {

		const conferenceTitle = await super.getString(
			'Ingrese el titulo de la conferencia a la que se quiere registrar');
		const studentEmail = await super.getString('Ingrese el email del estudiante');

		// validate if student and event exist
		const student = this._listOfStudents.find(stu => stu.email === studentEmail);
		const conference = this._listOfEvents.find(confe => confe.title === conferenceTitle);

		if (student && conference){
			conference.addStudent(student);
			console.log(`${student.name} registrado en ${conference.title}`);
		} else {
			console.log('Estudiante o evento no encontrado');
		}
	}

	public showMentors(): void {
		if (this._listOfMentors.length === 0) {
			console.log('No hay mentores guardados');
		}
		for (let mentor of this._listOfMentors) {
			console.log(mentor.name, mentor.email);
		}
	}

	public showStudents(): void {
		if (this._listOfStudents.length === 0) {
			console.log('No hay estudiantes guardados');
		}
		for (let student of this._listOfStudents) {
			console.log(student.name, student.email);
		}
	}

	public showEvents(): void {
		if (this._listOfEvents.length === 0) {
			console.log('No hay eventos guardados');
		}
		for (let event of this._listOfEvents) {
			this.showEvent(event);
		}
	}

	public showStudentsByEvent(): void {
		this._listOfEvents.forEach(event => {
			console.log(event.title);
			event.showStudentList();
		})
	}

	public showEventsByMentor(): void {
		this._listOfMentors.forEach(mentor => {
			mentor.showEvents();
		});
	}
}