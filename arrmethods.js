const items = [
    { name: 'Bike', price: 100 },
    { name: 'Laptop', price: 600 },
    { name: 'Iphone', price: 3 },
    { name: 'Tablet', price: 40 },
    { name: 'Car', price: 900 },
    { name: 'Microphone', price: 12 },
    { name: 'Jump rope', price: 980 },
    { name: 'Beat stick', price: 840 }
];

//FILTER METHOD

//return all items less than $100 

const filteredItems = items.filter((item) => {
    // all items that are less than this price will be in our new array
    // just return true or false for each item
    // don't change underlyng object - creates new array
    return item.price <= 100

});

//console.log(filteredItems)

//MAP METHOD
//turn an array into a new array
//returns an array with just item names
const itemNames = items.map((item) => {
    return item.name

});

//console.log(itemNames)

//FIND METHOD
//find single item in array 
//returns first item that passes logical test
const foundItem = items.find((item) => {
    //set some kind of logical test 
    return item.name === "Beat stick"

});


//console.log(foundItem)

//forEach METHOD
//very similar to a for loop
items.forEach((item) => {
    //console.log(item)

});

//SOME FUNCTION
// returns true or false
const hasCheapItems = items.some((item) => {
    return item.price <= 100;

});

//console.log(hasCheapItems)

//EVERY FUNCTION
//checks to make sure every item passes test
const allCheapItems = items.every((item) => {
    return item.price <= 1000;
})

//console.log(allCheapItems)

//REDUCE METHOD
//doing an operation on array and returning one number
// currentTotal stars with whatever second parameter was
const total = items.reduce((currentTotal, item) => {
    //adds to whatever previous iteration returned
    //console.log(currentTotal)
    return item.price + currentTotal

}, 0)

//console.log(total)


//INCLUDES METHOD

const nums = [1, 2, 3, 4, 5]

const includesTwo = nums.includes(2)
console.log(includesTwo)