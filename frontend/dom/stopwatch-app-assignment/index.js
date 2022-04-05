/*
Uncomment variable dibawah ini untuk mulai mengerjakan. dilarang mengganti nama variable yang dibuat.
*/

var stopwatch = {
  startTime: 0,
  start: function() {
    stopwatch.startTime = Date.now();
  },
  stop: function() {
    stopwatch.startTime = 0;
  },
  reset: function() {
    stopwatch.startTime = 0;
  },
  getTime: function() {
    return stopwatch.startTime;
  }
};