/* let kaja = {
        imie: "Kaja",
        wzrost: 152,
        przedstawOsobe() {
            console.log(this.imie);
        }
    } */
/* let krystian = {
        imie: "Krystian",
        wzrost: 180,
        przedstawOsobe() {
            console.log(this.imie);
        }
    } */
// jeżeli chce wyswietlić konkretną osobę:
// kaja.przedstawOsobe();
// jezeli dwoch to:
// kaja.przedstawOsobe();
// krystian.przedstawOsobe();
// mozna bezposrednio odwolywać
// console.log(kaja.wzrost);
// i można nadpisywać
// kaja.wzrost = 200;
// console.log(kaja);
// !!!!slowo this wskazuje jaki konkretny element ma wyswietlać

// !!!! KLASY!!!

/* let monetaZl = {
    promien: 20,
    nominal: 100,
    waga: 50,
    material: "zLoto"
}
console.log(monetaZl.material); */

//  klasy określiają typy danych. Możemy w nich określić co-kolwiek przykład poniżej
// !!! Wyjątek klassy się zaczynają z Dużej litery

class Osoba {
    constructor(imie, nazwisko, wzrost, oczy) {
        this.imie = imie;
        this.nazwisko = nazwisko;
        this.wzrost = wzrost;
        this.oczy = oczy;
    }
    wyswietlInfo() {
        console.log('imie:' + this.imie + "\n" + "nazwisko:" + this.nazwisko + "\n" + "wzrost:" + this.wzrost + "\n" + "oczy:" + this.oczy);

    }
}
let krystian = new Osoba('Krystian', 'Dziopa', 180, 'niebeskie');
let andrzej = new Osoba("", "Szymanski", 177, "bronzowe");

andrzej.wzrost = 178;
// если сдлать так, как внизу, то в консоли появится инфо о Андрее не как список (как обфчно), а как таблица двнных
andrzej.wyswietlInfo();
console.log(krystian, andrzej);