'use strict';

$('#btn').click(function() {
    $('#sque').animate({

        'margin-left': '300px',
        'width': '100px',
        'height': '100px',
    }, 3000, newColor);
});

function newColor() {
    $('#sque').animate({
        'background-color': 'blue'
    }, 5000, newText);
}

function newText() {
    $('h2').animate({
        'opacity': '1',
    });
}