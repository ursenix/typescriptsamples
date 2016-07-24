const myName = "Senthil Kumaran";

var getMyName = ():string => myName;

var showName = function(name:string){
    console.log(name);
}
 
showName(myName);

var test:()=>void;

console.log(getMyName());

var foo = (name:string) => name;

//Passing function as parameter
var foo1 = function(fn:()=>void){
    fn();
}

//var boo = function(foo:(name:string) => string):string
