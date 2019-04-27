let wzrostMateusza = 190;
let wzrostOlgi = 190;

if (wzrostOlgi > wzrostMateusza) {
    console.log('Olga jest wyższa :)');
} else if (wzrostOlgi == wzrostMateusza) {
    console.log('Olga jest taka sama jak Mateusz');
} else {
    console.log('Olga jest niższa');
}

// przełącvznik logiczny

let kolor = 'zielony';

switch (kolor) {
    case 'czerwony':
        console.log('kolor czerwony')
        break;
    case 'zielony':
        console.log('kolor zielony')
        break;
    case 'niebeski':
        console.log('kolor niebieski')
        break;
    default:
        console.log('inny kolor')
}