'use strict'

const fibonacci = (n) => {

    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else {
        let result = fibonacci(n - 1) + fibonacci(n - 2);
        return result;
    }

}
console.log(fibonacci(15));