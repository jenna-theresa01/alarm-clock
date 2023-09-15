// CREATE an alarm clock

// START 
// Show current time
let today = new Date ();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
console.log(time);

// function to convert time to string value
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


