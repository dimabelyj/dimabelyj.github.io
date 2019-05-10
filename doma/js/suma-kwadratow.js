'use strict';
let iter = [1, 2, 3, 4, 5, 6];
const mojaFunkcja = (iter) => {

    let value = 0;
    for (let i = 0; i < iter.length; i++) {
        value += (iter[i]) ** 2;
    }
    console.log(value);
}
mojaFunkcja(iter);