const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

//takes two to three parameters - event type and call back function


//when you click on these, it will print the current element and it's parents

//stopPropogation() stops all capturing and bubbling


// grandparent.addEventListener('click', e => {
//     console.log('Grandparent capturing')
// }, { capture: true });

// grandparent.addEventListener('click', e => {
//     console.log('Grandparent bubbling')
// });

// parent.addEventListener('click', e => {
//     console.log('Parent capturing')
// }, { capture: true });

// parent.addEventListener('click', e => {
//     console.log('Parent bubbling')
// });

// child.addEventListener('click', e => {
//     console.log('Child capturing')
// }, { capture: true });

// child.addEventListener('click', e => {
//     console.log('Child bubbling')
// });

// document.addEventListener('click', e => {
//     console.log('Document capturing')
// }, { capture: true });

// document.addEventListener('click', e => {
//     console.log('Document bubbling')
// });




//event bubbling - one half - working outwar from innermost element
// bubbles move upwards - bubble up the tree -

//capturing - one half - working furthest away and working up
// third parametere of addEventListener


//set third parameter to {once: true} so it only happens once
// .removeEvenListener 

parent.addEventListener('click', printHi)


//doesn't work for anonymous function
selfTimeout(() => {
    parent.removeEventListener('click', printHi)
}, 2000)

function printHi() {
    console.log("Hi")

}