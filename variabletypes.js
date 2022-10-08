// var is function scoped - avaiable anywhere inside of function

// let and const are blocked scope  - only available inside block i.e loop or if statemnet


if (true) {
    var varVariable = "This is true"
}

//completely redefines variable
var varVariable = "This is false"

console.log(varVariable)

if (true) {
    let letVariable = "This is true"
}

//can't redefine letVariable - saves accidental redefinition

//doesn't recognize variable since it was defined inside block - can't find it- only available in if block -- have to put inside if statement
console.loog(letVariable)


//can access before definition - can create variable after using it -can't with let
console.log(otherVariable)

var otherVariable = true;

//const allows you to change properties of object if it is an object

//better to use const than let

