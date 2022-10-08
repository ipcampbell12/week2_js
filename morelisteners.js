

// const divs = document.querySelectorAll('div')

// divs.forEach(div => {
//     div.addEventListener('click', () => {
//         console.log('hi`')
//     })
// })

// //not effected by above above event listenner - selector was ran before creating this div
// const newDiv = document.createElement('div')
// newDiv.style.width = "200px"
// newDiv.style.height = "200px"
// newDiv.style.background = "Purple"
// document.body.append(newDiv)

// soo . . . 

//event delgation 
//applies to anything that is a div in the whole document with mathces() function
//can make your own function

// document.addEventListener("click", e => {
//     if (e.target.matches('div')) {
//         console.log('hi')
//     }
// })


//same as above but as a function
function addGobalEventListener(type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
    })


}
