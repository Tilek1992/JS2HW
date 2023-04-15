const TIME_LIMIT = 300000;
const timer = document.getElementById("timer");
const start = Date.now();
const interval = setInterval(() => {
  const elapsed = Date.now() - start;
  const remaining = TIME_LIMIT - elapsed;
  const minutes = Math.floor((remaining / 1000 / 60) % 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor((remaining / 1000) % 60)
    .toString()
    .padStart(2, "0");
  timer.innerHTML = `${minutes}:${seconds}`;
  if (remaining <= 0) {
    clearInterval(interval);
    timer.innerHTML = "Время вышло!";
  }
}, 1000);
