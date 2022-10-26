const word1 = window.prompt('inserisci la prima parola');
const word2 = window.prompt('inserisci la seconda parola');

if (word1.length > word2.length) {
   console.log(`la parola "${word1}" è più lunga`);
} else if (word2.length > word1.length) {
   console.log(`la parola "${word2}" è più lunga`);
} else {
   console.log(`sono lunghe uguali`);
}
