// jsnack 6
// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const number = [
   2, //
   1,
   2,
   15,
   2,
   50,
   2,
   80,
   2,
];
// trovo gli item in posizione dispari
let sum = 0;
for (let i = 0; i < number.length; i++) {
   if (i % 2 === 0) {
      let oddPositionNumber = number[i];
      sum += oddPositionNumber;
   }
}
document.getElementById('message').innerHTML = `numeri dell'array ${number}  la somma è ${sum}`;
console.log(sum, 'la somma');
