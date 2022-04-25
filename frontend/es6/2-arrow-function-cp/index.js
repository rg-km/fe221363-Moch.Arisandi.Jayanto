/**
 * Ubah fungsi-fungsi di bawah ini menjadi bentuk arrow function
 *
 * function multiplyByTwo (n) {
 *  return n * 2;
 * }
 *
 * function multiply (x, y) {
 *  return x * y;
 *
 * function returnTheTwo() {
 *  return 2;
 * }
 *
 */

// TODO: answer here
multiplyByTwo = (n) => {
  return n * 2;
}

multiply = (x, y) => {
  return x * y;
}

returnTheTwo = () => {
  return 2;
}

module.exports = {
  multiplyByTwo,
  multiply,
  returnTheTwo
}