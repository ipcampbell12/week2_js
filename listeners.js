const grandparent = document.querySelector('.grandparent')
const parent = document.querySelector('.parent')
const child = document.querySelector('.child')

//takes two to three parameters - event type and call back function


//when you click on these, it will print the current element and it's parents
grandparent.addEventListener('click', e => {
    console.log('Grandparent 1')
});


parent.addEventListener('click', e => {
    console.log('Parent 1')
});


child.addEventListener('click', e => {
    console.log('Child 1')
});
