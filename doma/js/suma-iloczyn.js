'use strict';

const mojaFunkcja = () => {
    let iter = [1, 2, 3, 4, 5, 6];
    for (let value of iter) {
        value = iter[0] + iter[1] + iter[2] + iter[3] + iter[4] + iter[5];
        console.log(value);
        // console.log(value1);
    }
}
const mojaFunkcja1 = () => {
    let iter = [1, 2, 3, 4, 5, 6];
    for (let value1 of iter) {
        value1 = iter[0] * iter[1] * iter[2] * iter[3] * iter[4] * iter[5];
        console.log(value1);
        // console.log(value1);
    }
}