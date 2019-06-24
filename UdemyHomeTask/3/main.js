let money,
    time;

function start (){
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
// проверка вводной строки бюджета, чтоб пользователь не мог ввести ничего ероме цифр. 
// (первое условие если не цифры или строка остается пустой или чтоб пользователь не нажал кнопк4у отмена)
    while(isNaN(money) || money == '' || money == null){
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
}

function chooseExpenses (){
    for (let i = 0; i < 1; i++){
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
            
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && 
        a != '' && b != '' && a.length < 50){
            console.log('done');
            appData.expenses[a] = b;
        } else{
            console.log('Одно из значений введено не правильно, либо не введено вообще');
            i--;
        }
    }
}
chooseExpenses();

function detectDayBudget (){
// Задаем количество знаков после запятой
    appData.moneyPerDay = (appData.budget / 30).toFixed(2);
    alert('Ваш ежедневный бюджет: ' + appData.moneyPerDay);
}
detectDayBudget ();

function detectLevel (){
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка');
    } else if (appData.moneyPerDay > 200 || appData.moneyPerDay < 2000) {
        console.log('Средний уровень достатка');
    } else if (appData.moneyPerDay > 2000) {
        console.log('Высокий уровень достатка');
    } else {
        console.log('Произошла ошибка');
    }
}
detectLevel ();

function checkSavings (){
    if(appData.savings == true){
        let save = +prompt('Какова сумма накоплений в месяц?'),
            percent = +prompt('Под какой процент?');

            appData.mounthIncome = save/100/12*percent;
            alert('Доход в месяц с Вашего депозита: ' + appData.mounthIncome);
    }
}
checkSavings();

function chooseOptExpenses(){
    for (let i = 1; i <= 3; i++){
    appData.optionalExpenses[i] = prompt('Статья необязательных расходов?');
    console.log(appData.optionalExpenses); 
    }
}
chooseOptExpenses();