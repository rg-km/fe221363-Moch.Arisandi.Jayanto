/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/
 
// let stopwatch = mendapatkan value dari stopwatch
// let startbtn = tombol untuk memulai stapwatch
// let stopbtn = tombol untuk memberhentikan stopwatch
// let resetbtn = tombol untuk mereset value dari stopwatch
 
// begin answer
let stopwatch = document.getElementById("stopwatch");
let startbtn = document.getElementById("start");
let stopbtn = document.getElementById("stop");
let resetbtn = document.getElementById("reset");
 
let hour = 0;
let min = 0;
let sec = 0;
let stopTimer = true;
 
startbtn.addEventListener("click", start);
stopbtn.addEventListener("click", stop);
resetbtn.addEventListener("click", reset);
 
function start() {
  if (stopTimer === true) {
    stopTimer = false;
    runTime();
  }
}
 
function stop() {
  if (stopTimer === false) {
    stopTimer = true;
  }
}
 
function reset() {
  hour = 0;
  min = 0;
  sec = 0;
  stopTimer = true;
 
  stopwatch.innerHTML = "00:00:00";
}
 
function runTime() {
  if (stopTimer == false) {
    hour = parseInt(hour);
    min = parseInt(min);
    sec = parseInt(sec);
 
    sec = sec + 1;
 
    if (sec == 60) {
      min = min + 1;
      sec = 0;
    }
 
    if (min == 60) {
      hour = hour + 1;
      min = 0;
      sec = 0;
    }
 
    if (sec < 10 || sec == 0) sec = `0${sec}`;
    if (min < 10 || min == 0) min = `0${min}`;
    if (hour < 10 || hour == 0) hour = `0${hour}`;
 
    stopwatch.innerHTML = `${hour}:${min}:${sec}`;
 
    setTimeout(runTime, 1000);
  }
}