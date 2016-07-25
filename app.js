var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var myName = "Senthil Kumaran";
var getMyName = function () { return myName; };
var showName = function (name) {
    console.log(name);
};
showName(myName);
var test;
console.log(getMyName());
var foo = function (name) { return name; };
//Passing function as parameter
var foo1 = function (fn) {
    fn();
};
//var boo = function(foo:(name:string) => string):string
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
// Extends / Inheritence
//==================================================
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager(firstName, lastName) {
        _super.call(this, firstName); // super calls parents constructor.
    }
    // This overrides the parent method
    Manager.prototype.getName = function () {
        return this._firstName;
    };
    return Manager;
}(Person));
//==================================================
var m = new Manager("Vidya", "Senthil Kumaran");
console.log(m.getName());
// Class that implements IPerson interface
//==================================================
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
    //The following implementation is an optional.
    Employee.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Employee;
}());
//==================================================
var emp1 = new Employee("Senthil", null, true); // null will consider as value
var emp2 = new Employee("Shakti", undefined, false); // undefined is correct to pass
var emp3 = new Employee("Esha Rowdy");
console.log(showPerson(emp1));
console.log(showPerson(emp1).getName());
console.log(showPerson(emp1).getFullName());
console.log(showPerson(emp2));
console.log(showPerson(emp2).getName());
console.log(showPerson(emp2).getFullName());
console.log(showPerson(emp3));
//person(1); // This gives an error
//http://stackoverflow.com/questions/12827266/get-and-set-in-typescript
var Student = (function () {
    function Student(FirstName, LastName) {
        this.FirstName = FirstName;
        this.LastName = LastName;
        this._age = 0;
    }
    Object.defineProperty(Student.prototype, "Age", {
        set: function (age) {
            this._age = age;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Student.prototype, "FullName", {
        get: function () {
            return this.FirstName + " " + this.LastName;
        },
        enumerable: true,
        configurable: true
    });
    Student.prototype.IsEligible = function () {
        if (this._age > 18)
            return true;
        else
            return false;
    };
    return Student;
}());
var student = new Student("Esha", "Kumaran");
console.log("Eligible: " + student.IsEligible());
student.Age = 20;
console.log("Eligible: " + student.IsEligible());
/// <reference path="sample.ts" />
/// <reference path="oops.ts" />
/// <reference path="property.ts" />
//tsc main.ts --out app.js  -target ES5 
