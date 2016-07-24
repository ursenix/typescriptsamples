var showPerson = function (p) {
    p.firstName = p.firstName + '*';
    p.lastName = p.lastName + '--';
    return p;
};
var Person = (function () {
    function Person(firstName) {
        this._firstName = firstName;
    }
    Person.prototype.getName = function () {
        return "You're good " + this._firstName;
    };
    return Person;
}());
var p = new Person("Esha");
console.log(p._firstName);
var Employee = (function () {
    function Employee(firstName, lastName, isGood) {
        if (lastName === void 0) { lastName = "Kumaran"; }
        this.firstName = firstName;
        this.lastName = lastName;
        this.isGood = isGood;
    }
    Employee.prototype.getName = function () {
        if (this.isGood != undefined) {
            if (this.isGood) {
                return "You're good " + this.firstName;
            }
            else {
                return "You're bad " + this.firstName;
            }
        }
        else {
            return "You're good " + this.firstName;
        }
    };
    //The following implementation is an optional.
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Employee;
}());
var emp1 = new Employee("Senthil", null, true); // null will consider as value
var emp2 = new Employee("Shakti", undefined, false); // undefined is correct to pass
console.log(showPerson(emp1));
console.log(showPerson(emp1).getName());
console.log(showPerson(emp1).getFullName());
console.log(showPerson(emp2));
console.log(showPerson(emp2).getName());
console.log(showPerson(emp2).getFullName());
//person(1); // This gives an error
