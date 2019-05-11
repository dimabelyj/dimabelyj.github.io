// $('#naglowek-1').hide('slow').show('slow');

// na podstawie opacity
// $('#naglowek-2').fadeOut('slow').fadeIn('slow');

// bardzo podobne do hide i show
// $('#naglowek-2').slideUp('slow').slideDown('slow');

// robimy własną animacje !!! trzeba używac biblioteki do zmiany koloru można dodać delay(opóżnienie)  $('#naglowek-1').delay.animate 
// $('#naglowek-1').animate({
//     'margin-left': '500px',
//     // 'background-color': 'green',
//     'font-size': '4em'
// }, 3000);

function przesunNaSrodek() {
    $('#naglowek-1').animate({
        'margin-left': '500px',
        // 'background-color': 'green',
        'font-size': '4em'
    }, 3000, przesunWLewo);
}

function przesunWLewo() {
    $('#naglowek-1').animate({
        'margin-left': '0px',
        // 'background-color': 'green',
        'font-size': '30px'
    }, 3000, przesunNaSrodek);
}
przesunNaSrodek();