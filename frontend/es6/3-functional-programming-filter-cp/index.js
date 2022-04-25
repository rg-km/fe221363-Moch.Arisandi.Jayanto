/**
 * Mencari hewan diantara semak-semak
 * Buatlah fungsi untuk mencari nama binatang yang tersembunyi di dalam random string
 * Kata yang di cari akan selalu dituliskan dengan huruf kecil
 * Sedangkan semak-semak akan dituliskan dengan huruf besar.
 *
 * Contoh:
 * Input: UkUNFYGaFYFYmtNUHbJKHJJiOKDJKDnKFKFLgLLF
 * Output: kambing
 *
 * Hint:
 * - Javascript memiliki fungsi untuk mengubah huruf besar menjadi huruf kecil dan huruf besar menjadi huruf kecil
 * - string.toLowerCase(); string.toUpperCase();
 *
 */

const findAnimal = (bush) => {
  // TODO: answer here
  let upper = bush.toUpperCase();
  let animal = "";
  for (var i in bush) {
    upper[i] !== bush[i] ? animal += bush[i] : "";
  }
  return animal;
};

const a = findAnimal("UkUNFYGaFYFYmTNUHbJKHJJiOKDJKDnKFKFLgLLF");
console.log(a);

module.exports = findAnimal