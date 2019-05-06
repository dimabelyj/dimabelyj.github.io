'use strict';

let pracownicyMleczarni = {
    "pracownicy": [
        { "firstName": "Krystian", "lastName": "Dziopa" },
        { "firstName": "Anna", "lastName": "Szapiel" },
        { "firstName": "Piotr", "lastName": "Żmuda" }
    ]
};

console.log(pracownicyMleczarni);
console.log(pracownicyMleczarni.pracownicy);
const iteruj = (element, index) => {
    console.log('element z indexem: ' + index + ' ma wartosc ' + element['firstName'] + ' ' + element['lastName']);
}
pracownicyMleczarni.pracownicy.forEach(iteruj);
// console.log(pracownicyMleczarni.pracownicy['firstName']);