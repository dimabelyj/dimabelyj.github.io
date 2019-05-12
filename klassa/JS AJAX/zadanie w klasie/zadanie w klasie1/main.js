'use strict';
/* const getData = () => {
    const data = fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.json())
        .then(response => {
            const user = response;
            const paragraf = document.createElement('p');
            paragraf.innerHTML = `
            <span>User ID: ${user.id}</span><br />
            <span>User NAME: ${user.name}</span><br />
            <span>User WEBSITE: ${user.website}</span>
            `;
            button.insertAdjacentElement('afterend', paragraf)
            console.log(response);
        });

}

let btn = document.getElementById('button');
btn.addEventListener('click', getData); */

//  jQuery wariant


$(() => {
    let clicked = false;
    const getData = () => {
        $.getJSON('https://jsonplaceholder.typicode.com/users/1', response => {
            const paragraf = $('<p>');
            const user = response;
            paragraf.html(`
            <span>User ID: ${user.id}</span><br />
            <span>User NAME: ${user.name}</span><br />
            <span>User WEBSITE: ${user.website}</span>
            `);
            $('#button').after(paragraf);
            console.log(paragraf);
        })

    }
    $('#button').click(() => {
        getData();
        // żeby dane się pokazywałe tylko 1 raz, tworzymy zmienną let clicked = false; i dalej piszemy i zakomentować z góry getData();
        /*  if (!clicked) {
             getData();
             clicked = true;
         } else {
             return;
         } */
    })
})