'use strict';

const mojaFunkcja = () => {
    let iter = [1, 2, 3, 4, 5, 6];
    for (let value of iter) {
        value = Math.sqrt(iter[0]) + Math.sqrt(iter[1]) + Math.sqrt(iter[2]) + Math.sqrt(iter[3]) + Math.sqrt(iter[4]) + Math.sqrt(iter[5]);
        console.log(value);
        // console.log(value1);
    }
}