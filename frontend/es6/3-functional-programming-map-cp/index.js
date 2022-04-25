/**
 * Tampilkan pasang huruf besar dari semua huruf kecil yang ada pada array
 
 * Contoh 
 *  input: ['a', 'b', 'c', 'd']
 *  output: [ {'a': 'A'}, {'b': 'B'}, {'D': 'c'}, {'d': 'D'}]
 * 
 */

const lowerToUpperMap = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push({
      [array[i]]: array[i].toUpperCase()
    });
  }
  return result;
  // TODO: answer here
};

module.exports = lowerToUpperMap
