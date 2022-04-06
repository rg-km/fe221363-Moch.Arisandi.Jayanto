/**
 * Konversikan menit pada paramter menjadi satuan jam.
 * Misal: 
 * - 99 menjadi "1:39"
 * - 132 menjadi "2:12"
 * 
 * notes:
 * - type data pada parameter akan selalu INTEGER
 * - type data pada result akan selalu berupa STRING
 */



 function konversiMenit(menit) {
  // TODO: answer here
  if (menit % 60 < 10){  
  return(Math.floor(menit/60) + ":" + "0" + menit % 60) // Untuk menambahkan 0 sebelum angka terakhir jika kondisi menit dibawah 10
  } else {
  return(Math.floor(menit/60) + ":" + menit % 60) // Kondisi jika menit diatas 10, tidak perlu menambahkan 0
  }
}

console.log(konversiMenit(61));
console.log(konversiMenit(94));
console.log(konversiMenit(51));
console.log(konversiMenit(187));

module.exports = konversiMenit;