//this references the obejct that is exectuing the current function

// if function is object method -> this references the object
// if function is regularl function -> this reference the window object or global object


const video = {
    title: "Jumanji",
    play() {
        console.log(this)
    }
};

//reference the video object
//video.play();

//can also add method later

video.stop = function () {
    console.log(this)
};

//video.stop();


//regular function
//returns global object

function playVideo() {
    console.log(this)
}

//playVideo();

//usign constructor function

function Video(title) {
    this.title = title;
    console.log(this)

}


// new operator creates new empty object
// constructor functions points to empty object
// this willl reference new empty object
//const v = new Video("Jumanji 2")



const otherVideo = {
    title: "Lord of the Rings",
    tags: ['Fantasy', 'Adventure', 'Epic'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);

    }
};

//"this" inside callback function references global object
// add "this" as second argument to forEach so that it references current object

otherVideo.showTags();