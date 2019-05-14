$(function() {
    console.log('dziala');
})


$(() => {
    const getData = () => {
        $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', response => {
            const div = $('<div id="dane-programisty">');
            const user = response;
            console.log(user);
            div.html(`
            <p>Imię: ${user.imie}</p>
            <p>Nazwisko: ${user.nazwisko}</p>
            <p>Zawód: ${user.zawod}</p>
            <p>Firma: ${user.firma}</p>
            `);
            $('#button').after(div);
            $('div').addClass('dane-programisty');
            console.log(div);
        })

    }
    $('#button').click(() => {
        getData();

    })
})