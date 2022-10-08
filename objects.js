//create object

//not called variable - called properties - like keys in dictionary

//methods = functions attached to object
const user = {
    name: "Jaquitha",
    age: 75,
    married: true,
    purchases: ['phone', 'car', 'latpop'],
    saName: function () {
        console.log(this)
    }
};

//console.log(user.purchases[1])


//THIS
//creates window objct
// this refers to window object
//console.log(this)


//returns all object properties
// this is only assigned when function is invoked
// in this case, this means user
user.saName()

//this like "self" in python


function sayMyAge() {
    console.log(`My age is ${this}`);
};

//defaults to window object
sayMyAge();