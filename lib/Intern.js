// Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, getSchool) {
        super(name, id, email);
        this.getSchoolVal = getSchool;
    }
    getRole(){
        return 'Intern'
    }
    getSchool(){
        return this.getSchoolVal;
    }
}

module.exports = Intern;