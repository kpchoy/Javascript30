let countDown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds * 1000;

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
  console.log({
    min,
    remainderSec
  });
}