// CREATE an alarm clock

// START 
// SET VARS
// Date obj - epach
let currentTimeInt = newDate().getTime(); // this is an integer

function onLoadFunction (event){
    console.log(event);
    // this code executes when the window.onload event happens
    // use setInterval to capture rach second 
    setInterval(setTimer, 1000);
}

// when the setInterval is invoked
function setTimer (event){
    console.log(event);
    // this code executes when setInterval is invoked
}

window.addEventListener("load", onLoadFunction);

// SET ALARM

// WHEN ALARM NEEDS TO ALERT (visual, sound??)

// RESET THE ALARM

// CREATE A NEW ALARM

// DISPLAY CURRENT TIME (human readable time)

// DISPLAY ON AN HTML PAGE (html file, js file, css file?)
// LOAD HTML, CSS, JS

/*
    window.onLoad = function() {
        //do something when the window has loaded
    };
    window.onLoad = onLoadFunction; // use a function to execute the onload event
    
    function onLoadFunction (event){
        console.log(event);
        // this code executes when the window.onload event happens

    }
*/

// DISPLAY ALARM STATUS
// DISPLAY ALARM VALUE (human readable time)

// END


// Scratchpad
// when we need a variable created
let someStrExample = "";
let someArrayExample = [];
let someObjExample = {};
let someBooleExample = false; // true until it is false

// integers
let someIntExample = 2;
let currentTimeIntExample = new Date().getTime();
// an integer

// loops
for(let i = 0; i < 20; i++){
    // do stuff here
}
while (somethingTruthy){
    // do something here
}

// functions
function someFunctionNameExample (param1) {
    // do something here
    // do you need to return something? 
}

let someOtherFunctionExample = (param1) => {
    // do something here
    // Start, declare vars
    // what does the function do? 
    // do you need to return something?
}

let myFunctionExample = function(param1) {
    // do something
    // do I need to return something
}
