const _firstName = Symbol();
const _lastName = Symbol();
const _occupation = Symbol();

export class Person{
    constructor(firstName,lastName,occupation){
		this[_firstName] = firstName;
		this[_lastName] = lastName;
        this[_occupation] = occupation;
		
	}

	get occupation(){
		return this[_occupation];
	}

	get fullName(){
		return `${this[_firstName]} ${this[_lastName]}`; 
	}

	sayHello(){
        //My name is James Bond and I am Criminal
		return `My name is ${this.fullName} and I am a ${this.occupation}`;
    }



};
