let sum = 0;
for (let i = 0; i < 10; i++) {
   const userNumber = Number(prompt('inserisci il numero'));
   sum += userNumber;
}
document.getElementById('message').innerHTML = sum;
