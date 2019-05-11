let naglowek1 = $('#naglowek-1');
let naglowek2 = $('#naglowek-2');
naglowek1.click(function() {
    // można zaoisać w inny sposób: naglowek1.css. Komenda this odwoluje się konkretnie do naglowek1
    $(this).css({ 'background-color': 'yellow', 'text-decoration': 'underline' });
})
naglowek2.on({
    'dblclick': function() {
        $(this).css('background-color', 'green');
    },
    'mouseenter': function() {
        $(this).css({ 'font-size': '3em', 'transition': 'all .4s' });
    },
    'mouseleave': function() {
        $(this).css('font-size', 'inherit');
    },
})