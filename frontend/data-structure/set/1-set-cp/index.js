// Tulis program sebagai fungsi yang memeriksa apakah dua set dikatakan intersection atau tidak.
// Jika kedua set intersection, fungsi tersebut harus mengembalikan nilai intersection nya.
//
// Contoh 1
// Input: a = {"Java", "Python", "Javascript", "C ++", "C#"}, b = {"Swift", "Java", "Kotlin", "Python"}
// Output: {"Java", "Python"}
// Explanation: intersection dari a dan b adalah "Java" dan "Python"
//
// Contoh 2
// Input: a = {"Java", "Python"}, b = {"Swift"}
// Output: {}
// Explanation: tidak ada intersection dari a dan b


function intersection(setA, setB) {
    const setUnion = new Set();
    for (let elem of setB) {
      if (setA.has(elem)) {
        setUnion.add(elem);
      }
    }
   
    return setUnion;
}
   
function tambah(a, b) {
    return a + b;
}
   
console.log(tambah(2, 5));
   
let setA = new Set(["java", "python", "javascript", "c++", "c#"]);
let setB = new Set(["Swift", "Java", "Kotlin", "Python"]);
   
console.log(intersection(setA, setB));

module.exports = { intersection };