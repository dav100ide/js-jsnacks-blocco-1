const word1 = window.prompt('inserisci la prima parola');
const word2 = window.prompt('inserisci la seconda parola');
const message = document.getElementById('message');
if (word1.length > word2.length) {
   message.innerHTML = `la parola "${word1}" è più lunga quindi stampo: ${word1}${word2}`;
} else if (word2.length > word1.length) {
   message.innerHTML = `la parola "${word2}" è più lunga quindi stampo: ${word2}${word1}`;
} else {
   message.innerHTML = `sono lunghe uguali`;

