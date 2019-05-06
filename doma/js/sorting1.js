'use strict';
let tabl = [12, 67, 34, 23.01, 24, 2, 56, 8, 0x10, 23.02, 78, 34, 1e2, 45, 67, 98, 1];

const bubble = (tabl) => {
    let len = tabl.length - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len + 1; j++) {

            if (tabl[j] < tabl[j - 1]) {
                let sort = tabl[j];
                tabl[j] = tabl[j - 1];
                tabl[j - 1] = sort;
            }

        }
    }
    console.log(tabl);
}
bubble(tabl);