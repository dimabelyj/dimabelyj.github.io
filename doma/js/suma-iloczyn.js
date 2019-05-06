'use strict';

const mojaFunkcja = () => {
    let iter = [1, 2, 3, 4, 5, 6];
    let value = 0;
    let value1 = 1;
    debugger;

    for (let i = 0; i < iter.length; i++) {
        value = value + iter[i];
        value1 = value1 * iter[i];

    }
    console.log(value, value1);
}