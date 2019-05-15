$(function() {
    console.log('dziala');
})

$('#btn1').click(function() {
    let createDiv = $('<div>');
    let newButton2 = $('<br><br> <button id = "btn2">Click me</button>');
    let newButton3 = $('<br><br> <button id = "btn3">Or me:)</button>');
    createDiv.html(`
    <p class="1">Paragraf 1</p>
    <p class="2">Paragraf 2</p>
    <p class="3">Paragraf 3</p>
    <p class="4">Paragraf 4</p>
    <p class="5">Paragraf 5</p>
    `);
    newButton2.html();
    newButton3.html();
    $('#btn1').after(createDiv);
    $('#btn1').after(newButton3);
    $('#btn1').after(newButton2);


    $('#btn2').click(function() {
        let pNodeFirst = $('p:first-of-type');
        let pNodeLast = $('p:last-of-type');
        pNodeLast.after(pNodeFirst)
    });

    $('#btn3').click(function() {
        let pNodeFirst = $('p:first-of-type');
        let pNodeLast = $('p:last-of-type');
        pNodeFirst.before(pNodeLast);
    })
});