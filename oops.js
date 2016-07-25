var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName) {
        _super.call(this, firstName);
    }
    Manager.prototype.getName = function () {
        return this._firstName;
    };
    return Manager;
}(Person));
var m = new Manager("Vidya", "Senthil Kumaran");
console.log(m.getName());
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
            return "IsGood not defined.";
        }
    };
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Employee;
}());
var emp1 = new Employee("Senthil", null, true);
var emp2 = new Employee("Shakti", undefined, false);
var emp3 = new Employee("Esha Rowdy");
console.log(showPerson(emp1));
console.log(showPerson(emp1).getName());
console.log(showPerson(emp1).getFullName());
console.log(showPerson(emp2));
console.log(showPerson(emp2).getName());
console.log(showPerson(emp2).getFullName());
console.log(showPerson(emp3));
