/**
 * Kali ini kamu diminta untuk membuat sebuah game gatcha dengan ketentuan berikut:
 * - diberikan sebuah variable button yang akan mengenerate angka random 1 - 5
 * - jika mendapat angaka 1 maka akan menampilkan "coba lagi ya"
 * - jika mendapat angaka 2 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 5"
 * - jika mendapat angaka 3 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 15"
 * - jika mendapat angaka 4 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 50"
 * - jika mendapat angaka 5 maka akan menampilkan "selamat kamu mendapatkan kupon sebanyak 100"
 * Buatlah Pseudocode beserta codenya menggunakan conditional "switch"
 */

// PSEUDOCODE:
// TODO: answer here

function gatcha(button) {
  if(button ===1){
      console.log("coba lagi")
  }
  else if(button === 2){
      console.log("selamat kamu mendapatkan kupon sebanyak 5")
  }
  else if(button === 3){
      console.log("selamat kamu mendapatkan kupon sebanyak 15")
  }
  else if(button == 4){
      console.log("selamat kamu mendapatkan kupon sebanyak 50")
  }
  else if(button === 5){
      console.log("selamat kamu mendapatkan kupon sebanyak 100")
  }
}

// Create variable button here
// TODO: answer here
var button = Math.floor(Math.random()*5)+1;

console.log(gatcha(button))

module.exports = gatcha