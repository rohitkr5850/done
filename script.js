let timer;
let seconds = 0;
let isRunning = false;

function formatTime(sec) {
  const mins = Math.floor(sec / 60);
  const secs = sec % 60;
  return ${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')};
}

document.getElementById('start').addEventListener('click', function () {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      seconds++;
      document.getElementById('display').textContent = formatTime(seconds);
    }, 1000);
  }
});

document.getElementById('stop').addEventListener('click', function () {
  clearInterval(timer);
  isRunning = false;
});

document.getElementById('reset').addEventListener('click', function () {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  document.getElementById('display').textContent = formatTime(seconds);
});