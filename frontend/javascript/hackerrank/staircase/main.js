// Staircase
// - Problem Solving (Basic)
// - Difficulty: Easy

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

// Full Problem: https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
  // Write your code here
  let result = '';
  for (let i = 0; i < n; i++) {
    let spaces = n - i - 1;
    let hashes = i + 1;
    for (let j = 0; j < spaces; j++) {
      result += ' ';
    }
    for (let k = 0; k < hashes; k++) {
      result += '#';
    }
    result += '\n';
  }
  return result;
  // TODO: answer here
}

function main() {
  const n = 6

  let result = staircase(n);
  console.log(result)
}

main(); // execute program

module.exports = staircase