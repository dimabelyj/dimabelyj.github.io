'use strict';

// получение элементов 

let startBtn = document.getElementById("start"),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],
    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value'),
    dataList = document.querySelector('.data'),
    buttonsAddExpenses = document.getElementsByClassName('data-buttons')[0];
console.log(dataList);

// создана кнопка добавления затрат
let newExpensesButton = document.createElement('button');
newExpensesButton.setAttribute('class', 'expenses-item-btn add-expenses');
buttonsAddExpenses.appendChild(newExpensesButton);
let textBtn = document.createTextNode('Add expenses');
newExpensesButton.appendChild(textBtn);

// создание поля для введения новых затрат
newExpensesButton.addEventListener('click', () => {
    let newExpenses = document.createElement('div');
    newExpenses.setAttribute('class', 'new-expenses');
    let newExpensesArea = document.createElement('input');
    newExpensesArea.setAttribute('class', 'expenses-item');
    newExpensesArea.setAttribute('type', 'text');
    // newExpensesArea.setAttribute('id', 'expenses_3');
    newExpensesArea.setAttribute('placeholder', 'Name');
    // Вариант с дивом
    newExpenses.appendChild(newExpensesArea);
    let newExpensesAreaPrice = document.createElement('input');
    newExpensesAreaPrice.setAttribute('class', 'expenses-item');
    newExpensesAreaPrice.setAttribute('type', 'text');
    // newExpensesAreaPrice.setAttribute('id', 'expenses_4');
    newExpensesAreaPrice.setAttribute('placeholder', 'Price');
    newExpenses.appendChild(newExpensesAreaPrice);
    dataList.insertBefore(newExpenses, buttonsAddExpenses);

    // !!!!! Рабочий вариант!!!!
    // dataList.insertBefore(newExpensesArea, buttonsAddExpenses);
    /* let newExpensesAreaPrice = document.createElement('input');
    newExpensesAreaPrice.setAttribute('class', 'expenses-item');
    newExpensesAreaPrice.setAttribute('type', 'text');
    // newExpensesAreaPrice.setAttribute('id', 'expenses_4');
    newExpensesAreaPrice.setAttribute('placeholder', 'Price');
    dataList.insertBefore(newExpensesAreaPrice, buttonsAddExpenses); */
});

let money,
    time;

expensesBtn.disabled = true;
optionalExpensesBtn.disabled = true;
countBtn.disabled = true;
// newExpensesButton.disabled = true;

startBtn.addEventListener('click', () => {
    money = +prompt("Your monthly budget?", '');
    time = prompt('Enter date in format YYYY-MM-DD', '');
    // проверка вводной строки бюджета, чтоб пользователь не мог ввести ничего ероме цифр. 
    // (первое условие если не цифры или строка остается пустой или чтоб пользователь не нажал кнопк4у отмена)
    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Your monthly budget?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;
    // newExpensesButton.disabled = false;   
});

expensesBtn.addEventListener('click', () => {

    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            // console.log('done');
            appData.expenses[a] = b;
            sum += +b;
        } else {
            console.log('Something is wrong', '');
            i--;
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', () => {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
		let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
	}
});

countBtn.addEventListener('click', () => {
    if (appData.budget != undefined) {
        // Задаем количество знаков после запятой
        appData.moneyPerDay = ((appData.budget - +expensesValue.textContent) / 30).toFixed(2);
        dayBudgetValue.textContent = appData.moneyPerDay;
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Minimum level of wealth';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = 'The average level of wealth';
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = 'High level of wealth';
        } else {
            levelValue.textContent = 'An error has occurred';
        }
    } else {
        dayBudgetValue.textContent = 'An error has occurred!';
    }
});

incomeItem.addEventListener('input', () => {
    let items = incomeItem.value;
    if (isNaN(items) || items != '') {
        appData.income = items.split(',');
        incomeValue.textContent = appData.income;
    } 
    // console.log(appData.income);
});

checkSavings.addEventListener('click', () => {
   if (appData.savings == true){
    appData.savings = false;
   } else {
    appData.savings = true;
   }
});

sumValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', () => {
    if (appData.savings == true) {
        let sum = +sumValue.value;
        let percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});


let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};
console.log(appData);
   
   