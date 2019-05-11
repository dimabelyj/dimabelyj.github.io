'use strict';
$(function() {
    console.log('jQuery is loaded');
});
$(function() {
    const slideShow = $('.slide-show');
    const singleSlide = $('.single-slide');
    const slideCount = singleSlide.length;
    const slideWidth = 100 / slideCount;
    let indexCounter = 0;

    // ustawiamy dynamicznie szerokość kontenera
    slideShow.css('width', slideCount * 100 + '%');

    // ustawiamy szerokość obrazków za pomocą .each
    singleSlide.each(function(index) {
        $(this).css({
            'width': slideWidth + '%',
            'margin-left': index * slideWidth + '%'
        })
    });
    //   podpinamy eventy click na przycisk
    $('.prev-slide').click(function() {
        slide(indexCounter - 1);
    });
    $('.next-slide').click(function() {
        slide(indexCounter + 1);
    });
    // robimy funkcje przy naciskaniu na button
    function slide(newIndex) {
        if (newIndex < 0 || newIndex >= slideCount) {
            return
        }
        // Ukrywamy napis
        const curentTitle = $('.slide-caption').eq(newIndex);
        curentTitle.fadeOut();

        const marginLeft = newIndex * (-100) + '%';

        // wywołanie animacji
        slideShow.animate({
            'margin-left': marginLeft
        }, 1000, function() {
            curentTitle.fadeIn();

        });
        indexCounter = newIndex;

    }
});