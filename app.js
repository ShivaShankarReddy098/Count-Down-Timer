let timer;
let hoursInput = document.getElementById('hours');
let minutesInput = document.getElementById('minutes');
let secondsInput = document.getElementById('seconds');
let timerDisplay = document.getElementById('timer');
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let resetBtn = document.getElementById('resetBtn');

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);

function startTimer() {
  let totalSeconds = getTimerInputInSeconds();
  if (totalSeconds > 0) {
    timer = setInterval(function () {
      if (totalSeconds > 0) {
        let hours = Math.floor(totalSeconds / 3600);
        let minutes = Math.floor((totalSeconds % 3600) / 60);
        let seconds = totalSeconds % 60;

        timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
        totalSeconds--;
      } else {
        clearInterval(timer);
        timerDisplay.textContent = "00:00:00";
      }
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  clearInterval(timer);
  timerDisplay.textContent = "00:00:00";
  hoursInput.value = "";
  minutesInput.value = "";
  secondsInput.value = "";
}

function getTimerInputInSeconds() {
  let hours = parseInt(hoursInput.value) || 0;
  let minutes = parseInt(minutesInput.value) || 0;
  let seconds = parseInt(secondsInput.value) || 0;

  return hours * 3600 + minutes * 60 + seconds;
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
