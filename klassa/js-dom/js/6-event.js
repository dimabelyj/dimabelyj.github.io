'use strict';
/* let parSecond = document.querySelector('#parSecond');
console.log(parSecond);
const klikAlert = () => {
        // w HTML na div który ma dzialać dodajemy onclick='klikAler();'   !!!!!!!!!!!!!
        alert('Kliknij DIVa');
    }
    // inny sposób bez podpinania nawiasów i bez dodawania w HTML!!!
    // parSecond.onclick = klikAlert;
    // jeszcze jeden variant
parSecond.addEventListener('click', klikAlert);
// usunąć event:
parSecond.removeEventListener('click', klikAlert);
// jeszcze jeden wariant;
parSecond.addEventListener('click', () => {
    alert('Funkcja anonimowa')
})
let link = document.querySelector('.link');
link.addEventListener('click', klikAlert); */

let parSecond = document.querySelector('#parSecond');
console.log(parSecond);

let parWParSecond = document.getElementById('parWParSecond');
console.log(parWParSecond);
const klikDiv = (e) => {
    console.log('kliknij DIV');
}
const klikParagraf = (e) => {
    console.log('Kliknij Paragraf');
}
parSecond.addEventListener('click', klikDiv);
parWParSecond.addEventListener('click', klikParagraf);