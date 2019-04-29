'use strict';
let formularz = document.getElementById('formularz');
console.log(formularz);

const stopWyslanie = (x) => {
    x.preventDefault();
    let input1 = document.querySelector('[name="fname"]');
    let input2 = document.querySelector('[name="lname"]');
    console.log(input1);
}
formularz.addEventListener("submit", stopWyslanie)