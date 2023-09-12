// intializing all variable

let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;




function startStop() {
    // Check if the timer is currently running
    if (isRunning) {
      // If it's running, stop it
      clearInterval(timer);
      // Change the text content of an element with the id "startStop" to "Start"
      document.getElementById("startStop").textContent = "Start";
    } else {
      // If it's not running, start it
      timer = setInterval(updateTime, 1000); // Calls the updateTime function every 1000 milliseconds (1 second)
      // Change the text content of an element with the id "startStop" to "Stop"
      document.getElementById("startStop").textContent = "Stop";
    }
    // Toggle the value of the isRunning variable
    isRunning = !isRunning;
  }

//   changing stop button to red after click

  const stopButton = document.getElementById("startStop");
  const resetButton = document.getElementById("reset")
  

  stopButton.addEventListener("click",function(){
    stopButton.classList.toggle("clicked");
  });

// changing the start button to blue


  resetButton.addEventListener("click",function(){
    resetButton.classList.toggle("clicked");
  });
  
 
 


  
 



  
  function reset() {
    // Clear the interval to stop the timer
    clearInterval(timer);
  
    // Change the text content of an element with the id "startStop" to "Start"
    document.getElementById("startStop").textContent = "Start";
    

  
    // Reset the time variables
    seconds = 0;
    minutes = 0;
    hours = 0;
  
    // Call a function updateDisplay to update the timer display
    updateDisplay();
  }
  

  function updateTime() {
    seconds++; // Increment the seconds
  
    if (seconds === 60) {
      seconds = 0;
      minutes++; // Increment the minutes when seconds reach 60
  
      if (minutes === 60) {
        minutes = 0;
        hours++; // Increment the hours when minutes reach 60
      }
    }
  
    // Call a function updatedisplay to update the timer display
    updateDisplay();
  }
  

  function updateDisplay() {
    // Get a reference to the HTML element with the id "display"
    const display = document.getElementById("display");
  
    // Use template literals to format the time as "hh:mm:ss" and update the text content
    display.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
    
  }
  
function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

reset(); // Initialize display



