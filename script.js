let timer;
let isRunning = false;
let totalSeconds = 0;

function setTimer() {
    let minutes = document.getElementById("minutesInput").value;
    if (minutes > 0) {
        totalSeconds = minutes * 60;
        updateDisplay();
    }
}
function startTimer() {
    if (!isRunning && totalSeconds > 0) {
        isRunning = true;
        timer = setInterval(() => {
            if (totalSeconds > 0) {
                totalSeconds--;
                updateDisplay();
            } else {
                clearInterval(timer);
                document.getElementById("alarmSound").play();
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    totalSeconds = 0;
    updateDisplay();
}

function updateDisplay() {
    let mins = Math.floor(totalSeconds / 60).toString().padStart(2, '0');
    let secs = (totalSeconds % 60).toString().padStart(2, '0');
    document.getElementById("timer").innerText = `${mins}:${secs}`;
}