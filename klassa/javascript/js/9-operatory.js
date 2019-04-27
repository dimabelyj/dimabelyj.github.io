'use strict'
let liczba1 = 8,
    liczba2 = 3;
let wynik;
wynik = liczba1 % liczba2;
console.log(wynik);

// operator przepisania =
liczba1 = liczba1 + 100;
// lub można zapisac w skrócie
liczba1 += 100;
// tak samo z innymi operatorami * / - i t.d. pracują skróty
console.log(liczba1);

if ("2" == 2) {
    console.log('prawda')
} else {
    console.log('nie prawda')
}
// a jeżeli to napisze nie prawde
if ("2" === 2) {
    console.log('prawda')
} else {
    console.log('nie prawda')
}
//  negacja
// ! переворачиввает правду на фальш вообще в примере стоит неправда, но покажет правду
if (!(('2!==2') && (8 < 4))) {
    document.write('<br> prawda')
}

let wynikLogiczny = (3 > 5) ? 'prawda' : 'falsz';
console.log(wynikLogiczny);