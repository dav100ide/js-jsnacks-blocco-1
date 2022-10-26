// jsnack 5
const numberList = [];
for (let i = 0; i < 6; i++) {
   const userNumber = Number(prompt('inserisci il numero'));
   if (userNumber % 2 !== 0) {
      numberList.push(userNumber);
   }
}
const message = document.getElementById('message');
message.innerHTML = numberList;
