'use strict'

let mainHeader = document.getElementById('header');

console.log(mainHeader);
// różnica
console.log(mainHeader.innerHTML);
console.log(mainHeader.innerText);
console.log(mainHeader.outerHTML);
// zmieniamy atrybut
mainHeader.id = "nowe-id"
    // można dodać nowy atrybut
mainHeader.setAttribute('class', 'header');
// i zmienić nazwe
mainHeader.className = 'nowa-classa'
    // żeby wiedzieć które klasy się znajdują w Headers, robimy tak:
let klasy = mainHeader.className;
console.log(klasy);
// jerzeli chcemy dodac class
mainHeader.classList.add('active')
    // usunąć klasse
    // mainHeader.classList.remove('active')
let zmienKolor = document.getElementById('toogle');

// dodaliśmy zdarzenie do klassy przez przelącznik toggle
zmienKolor.addEventListener('click', () => {
        zmienKolor.classList.toggle('active')
    })
    // zmieniamy kolor w stylach
zmienKolor.style.color = "blue";