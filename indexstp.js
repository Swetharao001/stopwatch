const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;
//global variables
// timer---will store the interval ID that keeps updating the stopwatch
//startTime---Stores the timestamp when we start the stopwatch
//elapsedTime---Keeps track of total time passed
//isRunning: Boolean flag to track if stopwatch is running or not 

function start(){
  if(!isRunning) {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(update, 10);
    isRunning = true;
  console.log(timer);
  }
}
//Date.now()-- returns current timestamp in milliseconds
//setInterval(update, 10): Calls the update function every 10 milliseconds
//We subtract elapsedTime from current time to handle pausing/resuming correctly


function stop(){
  if(isRunning){
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}
//clearInterval(timer): Stops the timer from updating
//Calculates final elapsedTime before stopping
//Sets isRunning to false

function reset(){
  clearInterval(timer);
   startTime = 0;
   elapsedTime = 0;
   isRunning = false;
   display.textContent = "00:00:00:00"
}
//Stops the timer and resets all variables to initial state
//Updates display to show zeros

function update(){

  const currentTime = Date.now();
  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
  let seconds = Math.floor(elapsedTime / 1000 % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}: ${seconds}:${milliseconds}`
}

/*Calculates current elapsed time
Converts milliseconds to hours/minutes/seconds:
1000 milliseconds = 1 second
1000 * 60 = 1 minute
1000 * 60 * 60 = 1 hour
Math.floor() rounds down to nearest whole number
padStart(2, "0") ensures numbers are always 2 digits (e.g., "01" instead of "1")
Updates the display with formatted time*/