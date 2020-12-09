let arr = [1 ,-2, 6, -7,10, 9, 14, true, false, null, undefined];
arr.filter((item) => typeof item === "number");
arr.map((item) => item * 10);
arr.reduce((total, valCurenta) => total + valCurenta, 0);

class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    introduction() {
        console.log(`My name is ${this.name} ${this.surname} and I like ${this.preferences()}.`);
    }
    preferences() {
        return 'cars';
    }
    contract() {
        return 'part-time';
    }
}

class Employee extends Person {
    preferences() {
        return 'IT zone';
    }

    contract(time) {
        return time;
    }
}

const contract_list = ['part-time', 'full-time']

let andrew = new Employee('Andrew', 'Martins');
let jacob = new Employee('Jacob', 'Stevens');

//first employee
console.log(andrew.introduction());
console.log(andrew.preferences());
console.log(andrew.contract(contract_list[0]));

//second employee
console.log(jacob.introduction());
console.log(jacob.preferences());
console.log(jacob.contract(contract_list[1]));