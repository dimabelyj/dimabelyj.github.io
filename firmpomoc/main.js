'use strict';

$('html').show(function() {
    $('.an').animate({
        'opacity': '1',
        'font-size': '35px',
    }, 5000, newColor);
});

function newColor() {
    $('.an').animate({
        'opacity': '0',
    }, 2000, newColor1);
}

function newColor1() {
    $('.an').animate({
        'opacity': '1',
        'color': '#007bff',
    }, 2000, newColor);
}

