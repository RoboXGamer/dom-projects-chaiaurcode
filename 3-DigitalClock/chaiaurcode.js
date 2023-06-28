const clock = document.getElementById('clock');

setInterval(function () {
  const Time = new Date().toLocaleTimeString();
  clock.innerText = Time;
}, 1000);
