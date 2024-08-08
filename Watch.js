const Hours = document.getElementById("Hrs");
const Mins = document.getElementById("Min");
const Secs = document.getElementById("Sec");



setInterval (()=> {


let currentTime = new Date();

Hours.textContent = currentTime.getHours();
Mins.textContent = currentTime.getMinutes();
Secs.textContent =currentTime.getSeconds();

}, 1000)