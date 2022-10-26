const userName = window.prompt('come ti chiami?');
const guests = ['mario', 'davide', 'sabrina', 'giulio', 'chiara'];
let invited = false;
for (let i = 0; i < guests.length; i++) {
   const guest = guests[i];
   if (userName === guest) {
      invited = true;
      break;
   }
}
const message = document.getElementById('message');
if (invited) {
   message.innerHTML = 'sei un figo, sei stato invitato alla festa di Gatsby';
} else {
   message.innerHTML = 'sfigato, NON ti abbiamo invitato';
}
