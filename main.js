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
