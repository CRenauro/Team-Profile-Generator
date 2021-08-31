// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

const Employee = require('./Employee.js');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumberVal = officeNumber;
    }

    getRole(){
        return 'Manager'
    }
    officeNumber(){
        return this.officeNumber;
    }
}

module.exports = Manager;

// const myManager = new Manager("Clara", 1, "crenauro@gmail.com", "crenauro");
// console.log(myManger.getRole()) // prints Manager
// console.log(myManager.officeNumber()) // prints 1
// console.log(myManager.getName()) // prints Clara