// znajdovanie elementów na stronie po id
let parFirst = document.getElementById('parFirst');
console.log(parFirst);


// znajdovanie elementów na stronie po klasie
let linki = document.getElementsByClassName('superlink');
console.log(linki);


// znajdovanie elementów na stronie po nazwie тега
let linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);


// znajdovanie elementów na stronie po nazwie id i class .querySelector (pobiera tylko pierwszy), jerzeli chcę wszystkie to zapisuje all
let linkiPoSelektorze = document.querySelectorAll('.superlink');
console.log(linkiPoSelektorze);


// pętla pracuje tylko gdy włączony .querySelectorAll
linkiPoSelektorze.forEach((link, i) => {
    console.log(link.outerHTML);
})