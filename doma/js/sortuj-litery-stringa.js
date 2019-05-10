'use strict';

const reverseStr = (str) => {
    return str.split('').sort().join(', ');
}
console.log(reverseStr('Akademia108'));


/* var fruits = ["Banana", "Orange", "Apple", "Mango"];
const reverseStr = () => {
    return fruits.sort().join();
}
console.log(reverseStr()); */