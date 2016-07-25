interface IPerson{
    firstName:string;
    lastName: string;
    getName:()=>string;
    getFullName?:()=>string; // ? for optional implementation
}

var showPerson = (p:IPerson):IPerson=>{
    p.firstName = p.firstName + '*';
    p.lastName = p.lastName+'--';
    return p;
}



class Person{
    _firstName:string;

    constructor(firstName:string){
        this._firstName = firstName;
    }

    getName():string{
        return "You're good " + this._firstName;
    }
}

var p = new Person("Esha");
console.log(p._firstName);

// Extends / Inheritence
//==================================================
class Manager extends Person{
    constructor(firstName:string, lastName:string){
        super(firstName); // super calls parents constructor.
    }

    // This overrides the parent method
    getName(){
        return this._firstName;
    }
}
//==================================================

var m = new Manager("Vidya", "Senthil Kumaran");
console.log(m.getName());

// Class that implements IPerson interface
//==================================================
class Employee implements IPerson {
    firstName:string;
    lastName:string;
    isGood:boolean;

    constructor(firstName:string, lastName:string="Kumaran", isGood?:boolean){
        this.firstName = firstName;
        this.lastName = lastName;
        this.isGood = isGood;
    }

    getName():string{
        if(this.isGood != undefined){
            if(this.isGood){
                return "You're good " + this.firstName;
            }
            else{
                return "You're bad " + this.firstName;
            }
        }
        else{
            return "IsGood not defined.";
        }

    }

    //The following implementation is an optional.

    getFullName():string{
        return this.firstName + " " + this.lastName;
    }

}
//==================================================

let emp1 = new Employee("Senthil",null,true); // null will consider as value
let emp2 = new Employee("Shakti",undefined,false); // undefined is correct to pass
let emp3 = new Employee("Esha Rowdy");

console.log(showPerson(emp1));
console.log(showPerson(emp1).getName());
console.log(showPerson(emp1).getFullName());
console.log(showPerson(emp2));
console.log(showPerson(emp2).getName());
console.log(showPerson(emp2).getFullName());
console.log(showPerson(emp3));
//person(1); // This gives an error
