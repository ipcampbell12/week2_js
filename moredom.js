//select by id
const grandparent = document.getElementById('grandparent-id')

//changes color by id
//grandparent.style.backgroundColor = "#333"

//or use it in a function
function changeColor(element) {
    element.style.backgroundColor = "red"
}

//select by class name
//always returns collection
//have to change into an array so you can use forEach
const parents = Array.from(document.getElementsByClassName("parent"))


//need to use forEach to change all colors
//parents.forEach(changeColor)

//query selector by id
const grampsies = document.querySelector('#grandparent-id')

//changeColor(grampsies)

//or by class 
//just selects first one
//selects one single element and the first one it finds
const oneChild = document.querySelector('.child')

//changeColor(oneChild)


const allMyChildren = document.querySelectorAll('.child')

//have to use forEach to change each child
//allMyChildren.forEach(changeColor)


//select single parent 
const parent = document.querySelector('.parent')


//just changes the first parent
//changeColor(parent)


//get array of all children of an element 
const pars = Array.from(grandparent.children)


//change color for all children
//pars.forEach(changeColor)

//get first child of first parents

//const parentOne = pars[0]
const chiquillos = pars[0].children

//changeColor(chiquillos[0])

//query selector works on any element
//This works the same as above
const childOne = grandparent.querySelector('.child')
//changeColor(childOne)

//change all children's color
const chillins = grandparent.querySelectorAll('.child')
//chillins.forEach(changeColor)

//can start with child element and go up and select parents
const firstChild = document.querySelector('#child-one')
//don't use # if getElementById

const purent = childOne.parentElement
//const gramps = purent.parentElement

//changeColor(purent)

//changeColor(firstChild)
//skip parents
//selects closest parent element that matches this selector
const gramps = childOne.closest('.grandparent')


//select sibling elements - side to side 
//seleect sibling of child one 
const childTwo = firstChild.nextElementSibling
changeColor(childTwo)

//or childTwo.previous

