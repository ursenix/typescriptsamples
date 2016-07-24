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
