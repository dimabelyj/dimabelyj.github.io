// replace menu items

let punkts = document.getElementsByClassName('menu-item'),
    menu = document.getElementsByClassName('menu')[0];
console.log(punkts);
console.log(menu);
menu.insertBefore(punkts[2], punkts[1]);

// add new element

let li = document.createElement('li');
li.setAttribute('class', 'menu-item');
li.innerText = 'fifth button';
menu.appendChild(li);
console.log(li);

// change img

document.body.style.backgroundImage = 'url(../img/apple_true.jpg)';

//  change text

let text = document.getElementById('title');
console.log(text);
text.innerText = 'Мы продаем только подлинную технику Apple';

// remove advertisement

let adv = document.getElementsByClassName('adv')[0];
console.log(adv);
adv.remove();

// answer from user

let inAnswer = document.getElementById('prompt');
let answer = document.createElement('p');
let opinion = prompt('Youe opinion about Apple INC?');
answer.innerText = opinion;
inAnswer.appendChild(answer);
console.log(answer);


