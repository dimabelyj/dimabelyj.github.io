'use strict';
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
let orderList = document.createElement('ol');



for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'city');
    listItem.innerHTML = cities[i];
    orderList.appendChild(listItem);
}

document.body.appendChild(orderList);