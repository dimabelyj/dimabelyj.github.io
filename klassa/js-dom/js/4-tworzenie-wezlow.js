'use strict'
let btn = document.createElement('button');
console.log(btn);
let txtBtn = document.createTextNode('Kliknij mnie');
console.log(txtBtn);
let classBtn = document.createAttribute('class');
classBtn.value = 'btn'

// wrzócamy text jako text do przycisku
btn.appendChild(txtBtn);
// dodajemy class do button jerzeli class stworzony classBtn.value = 'btn', to dodajemy przez .setAttributeNode
btn.setAttributeNode(classBtn);
console.log(classBtn);
// wrzucamy na strone
document.body.appendChild(btn);
// usuniecie elementów
// btn.removeAttribute('class');
// usuniecie elementu najpirew idziemy do rodzica wtedy usunąć dziecko
// btn.parentElement.removeChild(btn);