let countDown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

  displayEndTime(then);
  displayTimeLeft(seconds);

  countDown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if (seconds < 0) {
      clearInterval(countDown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000)
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const remainderSec = seconds % 60;
  const display = `${min}:${remainderSec < 10 ? '0': ''}${remainderSec}`;
  document.title = display;
  timerDisplay.textContent = display;

}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();

  const min = end.getMinutes();



  endTime.textContent = `Be back at ${hour}:${min}`
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));