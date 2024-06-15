// Variables 
let startTime = 0;
let elapsedTime = 0;
let intervalId = null;
// ---------------------------------------------



// Function to update the display 
function updateDisplay() {
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, '0');
    const seconds = String(time.getUTCSeconds()).padStart(2, '0');
    const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0');
    minute.textContent = minutes
    second.textContent = seconds
    milliSecond.textContent = milliseconds
}



// Making the logic of start button 
function startStopwatch() {
    if (!intervalId) {
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 10);
        start.disabled = true
        stopBtn.disabled = false
        reset.disabled = false

    }
}



// Making the logic of stop button 
function stopStopwatch() {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        start.disabled = false
        stopBtn.disabled = true

    }
}





// Making the logic for resetting the stopwatch 
function resetStopwatch() {
    stopStopwatch();
    elapsedTime = 0;
    updateDisplay();
    start.disabled = false

}





// Setting disabled attribute to stop button and rest button initially 
stopBtn.disabled = true
reset.disabled = true


// Adding event listeners to the buttons 
start.addEventListener('click', startStopwatch);
stopBtn.addEventListener('click', stopStopwatch);
reset.addEventListener('click', resetStopwatch);
