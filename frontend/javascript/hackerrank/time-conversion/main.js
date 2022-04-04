// Time Conversion
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */


// Full Problem: https://www.hackerrank.com/challenges/time-conversion/problem

function timeConversion(s) {
  // Write your code here
  var hours = s.substring(0, 2);
  var minutes = s.substring(3, 5);
  var seconds = s.substring(6, 8);
  var ampm = s.substring(8, 10);
  var newHours = parseInt(hours);
  if (ampm === 'PM') {
    if (newHours !== 12) {
      newHours += 12;
    }
  } else {
    if (newHours === 12) {
      newHours = '00';
    }
  }
  return newHours + ':' + minutes + ':' + seconds;
}

function main() {
  //var s = readLine();
  var s = '07:05:45PM'; // override input
  var result = timeConversion(s);
  console.log(result);

}

main(); // execute program

module.exports = timeConversion