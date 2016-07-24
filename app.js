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
