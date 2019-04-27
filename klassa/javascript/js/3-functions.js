'use strict'

const PI = 3.14;


//  dla js5


// function poleKola(r) {
//     let poleKola = PI * r * r;
//     console.log(poleKola);
// }


// JS6
const poleKola = (r, x) => {
    let poleKola = x * PI * r * r;
    // console.log(poleKola);
    return poleKola;
}
poleKola(25, 3);
poleKola(50, 5);
let rDuzego = 108;
poleKola(rDuzego);
let wynikDzialaniaFunkcji = poleKola(rDuzego, 10);
console.log(wynikDzialaniaFunkcji);