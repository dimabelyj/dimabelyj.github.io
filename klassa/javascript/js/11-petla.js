'use strict';

/* for (let i = 10; i > 1; i--) {
    console.log(i);
}
 */

let tablica = ['krystian', 'Monika', 'danuta'];
for (let i = 0; i < tablica.length; ++i) {
    console.log(tablica[i]);
}
//  element i index  (dla tablicy tak jest ze element Krystian ma index 0) czyli tak działa  forEach
const iteruj = (element, index) => {
    console.log('element z indexem:' + index + 'ma wartosc' + element);
}
tablica.forEach(iteruj)

// pętla for in jerzeli chceny przelecić przez wszystkie elementy tablicy
let person = {
    name: 'Krystian',
    age: 35
}
for (let key in person) {
    console.log(person[key]);
}
let iterable = [10, 20, 30];
for (let value of iterable) {
    value += 1;
    console.log(value);
}
let it = 0;

while (it < 10) {
    console.log(it);
    it++;
}
let iter = 20;
do {
    console.log(iter + ' dowhile');
    iter++;
    console.log(iter + ' dowhile');
} while (iter < 10)

let a = 0;
while (a < 10) {
    console.log(++a + ' przerwa w trakcie');
    if (a == 5) {
        break;
    }
}
//  continue przerwie konkretną iterację a dalej pójdzie
for (let b = 0; b < 10; ++b) {
    if (b == 5) {
        continue;
    } else {
        console.log(b);
    }
    console.log('--');
}