let createDiv = $('<div>');
let newButton2 = $('<button id = "btn2">Click me</button>');
let newButton3 = $('<br> <br> <button id = "btn3">Or me:)</button>');
createDiv.html(`
<p class="1">Paragraf 1</p>
<p class="2">Paragraf 2</p>
<p class="3">Paragraf 3</p>
<p class="4">Paragraf 4</p>
<p class="5">Paragraf 5</p>
`);
$('body').after(createDiv);
createDiv.after(newButton3);
createDiv.after(newButton2);

let pNodeFirst;
let pNodeLast;

$('#btn2').click(function() {
    pNodeFirst = $('p:first-of-type');
    pNodeLast = $('p:last-of-type');
    pNodeLast.after(pNodeFirst)
});

$('#btn3').click(function() {
    pNodeFirst = $('p:first-of-type');
    pNodeLast = $('p:last-of-type');
    pNodeFirst.before(pNodeLast);
});