// Buat kalkulator objek dengan 5 methods:
// - read() meminta (prompt) dua nilai dan menyimpannya sebagai properti objek.
// - sum() mengembalikan jumlah nilai yang disimpan.
// - substract() mengurangi jumlah nilai yang disimpan.
// - multiply() mengalikan nilai yang disimpan.
// - division() membagi nilai yang disimpan.
const prompt = require("prompt-sync")();

let calculator = {
  // Tulis kode di sini
  // TODO: answer here
  read: function(){
    this.a = parseInt(prompt("Masukkan nilai a: "));
    this.b = parseInt(prompt("Masukkan nilai b: "));
  },
  sum: function(){
    return this.a+this.b;
  },
  substract: function(){
    return this.a-this.b;
  },
  multiply: function(){
    return this.a*this.b;
  },
  division: function(){
    return this.a/this.b;
  },
};
  
calculator.read();
console.log(calculator.sum());
console.log(calculator.substract());
console.log(calculator.multiply());
console.log(calculator.division());