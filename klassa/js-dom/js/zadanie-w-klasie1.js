'use strict';

let przycisk = document.getElementById('klik');
console.log(przycisk);

const ustawTlo = () => {
    let p1 = document.getElementById('pierwszy');
    let p2 = document.getElementById('drugi');
    p1.style.backgroundColor = "red";
    p2.style.backgroundColor = "yellow"
        // console.log('ustawTlo');
}
przycisk.addEventListener("click", ustawTlo);