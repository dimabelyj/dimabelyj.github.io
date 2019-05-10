'use strict';

class Ksiazka {
    constructor(tytul, autor, _przeczytana) {
        this.tytul = tytul;
        this.autor = autor;
        this._przeczytana = _przeczytana;
    }
    get przeczytana() {
        return this._przeczytana === true ? ' i zostala przeczytana' : ' i zostala nie przeczytana';
    }
    opiszKsiazke() {
        console.log(`Ksiazka z tytulem: ${this.tytul}, Napisana autorem: ${this.autor}, ${this.przeczytana}`);
    }

}
let ksiazka1 = new Ksiazka('The Old Man and the Sea', 'Hemingway', true);
ksiazka1.opiszKsiazke();

let ksiazka2 = new Ksiazka('Баязет', 'Пикуль', false);
ksiazka2.opiszKsiazke();

let ksiazka3 = new Ksiazka('Мастер и Маргарита', 'Булгаков', false);
ksiazka3.opiszKsiazke();

let books = [ksiazka1, ksiazka2, ksiazka3];
console.log(books);

const iloscPrzeczytanych = (books) => {
    let countReaded = 0;
    for (let i = 0; i < books.length; i++) {
        let book = books[i];
        if (book._przeczytana == true) {
            countReaded += 1;
        }

    }
    console.log(countReaded);
}



debugger;
iloscPrzeczytanych(books);