// metoda find (filter) przechodzi przez cały plik po drzewy
$('body')
    .find('.par2')
    .text('tekst zmieniony w metodzie find()')
    .css('color', 'red');

// robimy pętlę żeby zmienić jak było wcześniej
let par2 = $('.par2');
par2.each(function(index, biezacyParagraf) {
    // console.log(index, biezacyParagraf);
    if (index === 0) {
        // do biezacyParagraf odwolujemy się jako do elementu jQuery bo w js nie ma takiej metody
        $(biezacyParagraf).css('color', 'green')
            .text('tekst zmieniony w metodzie each()');
    } else if (index === 1) {
        $(biezacyParagraf).css('color', 'blue')
            .text('tekst zmieniony w metodzie each()');
    } else if (index === 2) {
        $(biezacyParagraf).css('color', 'yellow')
            .text('tekst zmieniony w metodzie each()');
    }
});