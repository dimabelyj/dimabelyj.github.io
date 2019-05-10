'use strict';
let cities = ['Warsaw', 'Berlin', 'Paris', 'London', 'New York', 'Tokio', 'Moscow'];
// let walk = 0;
let orderList = document.createElement('ol');



for (let i = 0; i < cities.length; i++) {
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'city');
    listItem.innerHTML = cities[i];
    orderList.appendChild(listItem);
}

document.body.appendChild(orderList);


/* const citiesWalk = (element) => {
    walk += 1;
    console.log(walk + '. ' + element);
}
cities.forEach(citiesWalk);

const createClass = (cities) => {
    for (let i = 0; i < cities.length; i++) {
        cityClass += cities[i];
    }
    console.log(createClass(cities));
} */