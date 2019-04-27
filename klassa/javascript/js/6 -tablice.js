'use strict'
let imiona = ['Monika', 'Krystian', 'Łukasz'];

// jezeli chcemy dodać jeszcze jeden element i dodaje sie element
imiona[3] = 'Tania'

// chcemy zmienić element i element się zmienia
imiona[2] = 'Ela'
    // dodać element można przez push
imiona.push('Gelart')
    // usunonć Geralta pop
imiona.pop();
// wstawić element na pociątku tablicy unshift
imiona.unshift('Robert')
    // usuniecie pierwszego elementu shift
imiona.shift();
// jezeli chce zobaczyć jaki element jest usuwany robimy w console.log tak: console.log(imiona.shift()); lub dodany console.log(imiona.unshift())  
// pobrać długość tablicy console.log(imiona.length)
// metoda join polączy wszystkie dane tablicowe
// let imionaStr = imiona.join()
// jezeli nie chcę przez przycinek a łącznie mam doddać poprostu "" pomiędzy ()
// let imionaStr = imiona.join("")
// lub inny znak pomiędzy danych tablicowych
let imionaStr = imiona.join(":")


// metoda riverse odwrotnie podaje dane
imiona.reverse()

// metoda sort najpierw dodamy Zenek, wtedy on przeskakuje na koniec .sort
imiona.unshift('Zenek')
imiona.sort()
console.log(imiona);