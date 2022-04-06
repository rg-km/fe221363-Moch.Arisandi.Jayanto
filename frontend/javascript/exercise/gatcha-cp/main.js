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
    // TODO: answer here
    let button1 = "coba lagi ya";
    let button2 = "selamat kamu mendapatkan kupon sebanyak 5";
    let button3 = "selamat kamu mendapatkan kupon sebanyak 15";
    let button4 = "selamat kamu mendapatkan kupon sebanyak 50";
    let button5 = "selamat kamu mendapatkan kupon sebanyak 100";
  
    console.log("Your number is: " + button);
  
    switch (button) {
      case button = 1:
        return(button1)
        break;
      case button = 2:
        return(button2)
        break;
      case button = 3:
        return(button3)
        break;
      case button = 4:
        return(button4)
        break;
      case button = 5:
        return(button5)
        break;
      default:
        return("Please enter a number between 1 and 5")
    }
  }
  
  // Create variable button here
  let button = Math.floor((Math.random() * 5) + 1);
  // TODO: answer here
  
  console.log(gatcha(button))
  
  module.exports = gatcha