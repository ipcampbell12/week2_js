//global scope variable - declared outside of function - can be used inside any function - delcared in root of file

//logcal scope - declared inside function

// cons of global scope - can't reuse variable names, reserve space in browser - takes up space in brower is more resource heavy

// variable decalred in local scope are only used when function is called - less resource heavy

var number = 10;

function calc() {
    return number;
}

console.log(calc())