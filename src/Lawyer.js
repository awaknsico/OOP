import { Person } from '../src/Person';

const _typeOfLawyer = Symbol();
export class Lawyer extends Person{
	constructor(firstName,lastName,occupation,typeOfLawyer){
        super(firstName,lastName,occupation);
		this[_typeOfLawyer] = typeOfLawyer;
    }

	sayHello(){
		if(this.occupation.toLowerCase() === 'lawyer'){
            // I am John Doe and I am a Criminal Lawyer
			return `I am Barrister ${this.fullName} and I am a ${this[_typeOfLawyer]} ${this.occupation}`;
		}
		else{
            //@override
            //I am James Bond and I am not a Lawyer
			return `I am ${this.fullName} and I am not a ${this.occupation}`;
		}
    }
};