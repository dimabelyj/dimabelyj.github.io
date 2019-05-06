'use strict';

const sort = (array) => {
    for (let i = 0, endI = array.length - 1; i < endI; i++) {
        let inverse = false;
        for (let j = 0, endJ = endI - i; j < endJ; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                inverse = true;
            }
        }
        if (!inverse) break;
    }
    return array;
}