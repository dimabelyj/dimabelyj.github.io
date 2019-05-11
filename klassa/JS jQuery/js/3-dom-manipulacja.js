// let paragrafy = $('p');
// console.log(paragrafy.text());
// zmieniamy wszystkie paragrafy (teksty paragrafów) 
// paragrafy.text('Nowy tekst paragrafu');

// let paragrafyByHtml = $('p');
// // wybiera tylko pierwszy jerzeli .html()
// console.log(paragrafyByHtml.html());
// paragrafyByHtml.html('<span>Treść z znacznika span</span>');

let naglowek2 = $('#naglowek-2');
/*naglowek2.prepend('prependuj tresc | ');
naglowek2.append(' | Apendujemy tresc');

naglowek2.before('Beforujemy tresc | ');
naglowek2.after(' | afterujemy tresc');
console.log(naglowek2); */

// usuwa tylko tekst ale on istneje w html
// naglowek2.empty();
// usuawa znacznik z tekstem i z html też
// naglowek2.remove();
// console.log(naglowek2);

// zmieniamy h2 na span
// naglowek2.replaceWith('<span> Span </span>');


let paragrafy = $('p');
// paragrafy.css('background-color', 'green');
// jeżeli chcę zmienić dużo rzeczy robimy tak:
/* paragrafy.css({
    'background-color': 'green',
    'font-size': '2em',
    'color': 'yellow'
});
 */

// metody dodawania i usuwania classów zmiany są widoczne w pliku css
let pierwszyParagraf = $('.par').eq(0);
console.log(pierwszyParagraf);
pierwszyParagraf.addClass('red');
pierwszyParagraf.removeClass('red');

// dodaje w placeholder imie Jan Kowalski
$('input#input-1').val('Jan Kowalski');
// pobiera do konsoli zawartość textarea 
$('input').change(function() {
    console.log($(this).val());
})