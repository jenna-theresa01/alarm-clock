// CREATE an alarm clock

// START 
// funtction to convert time to string value
const getTimeString = ({hours, minutes, seconds}) => {
    if (minutes / 10 < 1) {
        minutes = "0" + minutes; 
    }
    if (seconds / 10 < 1) {
        seconds = "0" + seconds;
    }
    return `${hours}:${minutes}:${seconds}`
};

// Function to display current time on screen
const renderTime = () => {
    let currentTime = document.getElementById("current-time");
    const currentDate = new Date ();
    let hours = currentDate.getHours ();
    let minutes = currentDate.getMinutes ();
    let seconds = currentDate.getSeconds ();
    if (hours > 24) {
        hours = hours % 24;
    }
    const timeString = getTimeString({hours, minutes, seconds});
    currentTime.innerHTML = timeString;

}
    // use setInterval to capture each second 
    setInterval(renderTime, 1000);
    
// Date obj - epach
let currentTimeInt = newDate().getTime(); // this is an integer

function onLoadFunction (event){
    console.log(event);
    // this code executes when the window.onload event happens

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
