'use strict';

let money = +prompt('Ваш бюджет на месяц?', '');
let time = prompt('Введите дату в формате YYYY-MM-DD', '');

console.log(money);
console.log(time);

let appData = {
    money: money,
    time: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
}

let expenses1 = +prompt('Введите обязательную статью расходов в этом месяце', ''),
    expenses2 = +prompt('Во сколько обойдется?', '');


alert('Сумма, которую можно потратить в день ' + (appData.money-expenses1)/30);

