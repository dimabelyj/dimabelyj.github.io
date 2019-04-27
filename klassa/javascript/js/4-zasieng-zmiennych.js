'use strict'
let kontoLukasza = 1000000;

// funkcja globalna
const zrobZakupy = (konto, zaIle) => {
    // funkcja lokalna
    let kontoNatalii = 2000000;
    let ileZostaloNaKoncie = kontoNatalii - zaIle;
    return ileZostaloNaKoncie;
}
console.log(zrobZakupy(500000));

const zaplacPodatek = (kwota) => {
    console.log(kontoLukasza);
}
console.log(zaplacPodatek(500000));