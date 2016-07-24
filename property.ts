
//http://stackoverflow.com/questions/12827266/get-and-set-in-typescript

class Student{
    
    private _age:number = 0;
    
    set Age(age:number) {
        this._age = age;
    }
    
    constructor(public FirstName:string, public LastName:string){
        
    }
    
    get FullName(){
        return this.FirstName + " " + this.LastName;
    }
    
    IsEligible():boolean{
        if(this._age > 18)
            return true;
        else
            return false;
    }    
}

var student = new Student("Esha", "Kumaran");
console.log("Eligible: " + student.IsEligible());
student.Age = 20;
console.log("Eligible: " + student.IsEligible());
