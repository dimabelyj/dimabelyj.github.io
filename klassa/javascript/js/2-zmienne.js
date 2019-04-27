'use strict';

// console.log('proba')
const pi = 3.14;
let promienDuzego = 10;
let promienMalego = 5;
// liczymy S koła
let poleDuzego = pi * promienDuzego * promienDuzego;
// można ponownie obliczyć zmieniając zmienne
promienDuzego = 25;

poleDuzego = pi * promienDuzego * promienDuzego;
console.log(poleDuzego);
// stale nazywamy z wielkiej litery: pi, data urodzenia, cokolwiek. Chyli PI, AGE...
// nazywać zmienne trzeba jaką funkcje wykonuje