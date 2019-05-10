'use strict';
let mainUl = document.getElementById('items')
let mainHeader = document.getElementsByClassName('item');
console.log(mainUl);
console.log(mainHeader);



const myFunction = () => {
    console.log("Hello World!");
    let listItem = document.createElement('li');
    listItem.setAttribute('class', 'item');
    listItem.innerHTML = 'Item ' + (mainHeader.length + 1);
    mainUl.appendChild(listItem);
}
let newArr = document.getElementById("button");
newArr.addEventListener("click", myFunction);

document.body.appendChild(listItem);