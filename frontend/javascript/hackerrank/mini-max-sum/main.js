// Mini-Max Sum
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/mini-max-sum/problem

function miniMaxSum(arr) {
  // Write your code here
  arrSort = arr.sort()
  let min = 0
  let max = 0

  for (var i = 0; i<arr.length-1; i++){
    min += arrSort[i]
  }
  for (var j = 1; j<arr.length; j++){
    max += arrSort[j]
  }
  // TODO: answer here
  return (min+" "+max)
}

function main() {
  //arr = readLine().split(' ');
  //arr = arr.map(Number);
  var arr = [1, 2, 3, 4, 5]; // override input
  let result = miniMaxSum(arr);
  console.log(result)
}

main(); // execute program

module.exports = miniMaxSum