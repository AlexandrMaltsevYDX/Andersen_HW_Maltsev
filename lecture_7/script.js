// Stopwatch
let stopwatchInterval;
let stopwatchRunning = false;
let stopwatchTime = 0;

function formatTime(time) {
  const hours = String(Math.floor(time / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((time % 3600) / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

function updateStopwatch() {
  stopwatchTime++;
  document.getElementById("stopwatch").textContent = formatTime(stopwatchTime);
}

document.getElementById("startButton").addEventListener("click", () => {
  if (!stopwatchRunning) {
    stopwatchInterval = setInterval(updateStopwatch, 1000);
    stopwatchRunning = true;
  }
});

document.getElementById("stopButton").addEventListener("click", () => {
  if (stopwatchRunning) {
    clearInterval(stopwatchInterval);
    stopwatchRunning = false;
  }
});

document.getElementById("resetButton").addEventListener("click", () => {
  clearInterval(stopwatchInterval);
  stopwatchRunning = false;
  stopwatchTime = 0;
  document.getElementById("stopwatch").textContent = "00:00:00";
});

// Timer
let timerInterval;
let timerRunning = false;
let timerTime = 0;

function updateTimerDisplay() {
  document.getElementById("timerDisplay").textContent = formatTime(timerTime);
}

document.getElementById("setTimerButton").addEventListener("click", () => {
  const input = document.getElementById("timerInput");
  const time = parseInt(input.value, 10);
  if (!isNaN(time)) {
    timerTime = time;
    input.value = "";
    updateTimerDisplay();
  }
});

document.getElementById("startTimerButton").addEventListener("click", () => {
  if (!timerRunning && timerTime > 0) {
    timerInterval = setInterval(() => {
      timerTime--;
      updateTimerDisplay();
      if (timerTime <= 0) {
        clearInterval(timerInterval);
        timerRunning = false;
      }
    }, 1000);
    timerRunning = true;
  }
});

document.getElementById("stopTimerButton").addEventListener("click", () => {
  if (timerRunning) {
    clearInterval(timerInterval);
    timerRunning = false;
  }
});

document.getElementById("resetTimerButton").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timerTime = 0;
  updateTimerDisplay();
});
