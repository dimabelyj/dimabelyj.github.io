'use strict'
// pobieranie elementa dziecka
let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);
console.log(pierwszyDiv.parentNode);
console.log(pierwszyDiv.parentElement);
//  pobieranie elementu po dziecku!!!
console.log(pierwszyDiv.childNodes);
console.log(pierwszyDiv.children);
// można odwolać się do drugiego elementu (to bedzie <br>)
console.log(pierwszyDiv.children[2]);
// można do pierwszego i do ostatniego
console.log(pierwszyDiv.firstChild);
console.log(pierwszyDiv.lastChild);
// można do najbliżczego rodzenstawa
let pierwszyChild = pierwszyDiv.childNodes[6];
console.log(pierwszyChild);
console.log(pierwszyChild.previousSibling);
console.log(pierwszyChild.nextSibling);