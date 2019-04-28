'use strict'

const iloczyn = (x, y, z) => {
    let iloczynLok = x * y * z;
    return iloczynLok;
}
let iloczynGlobalny = iloczyn(32, 25, 12);
console.log(iloczynGlobalny);