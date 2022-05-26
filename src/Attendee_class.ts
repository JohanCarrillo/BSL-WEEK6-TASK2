
export class Attendee {
	public name: string;
	public email: string;

	constructor(myName: string, myEmail: string) {
		this.name = myName;
		this.email = myEmail;
	}

	public showInfo = (): void => {console.log(`name: ${this.name}, email: ${this.email}`)}
}
