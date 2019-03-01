'use stict';
 let money = +prompt("Ваш бюджет на месяц?", "");
 let time = prompt("Введите дату в формате YYYY-MM-DD", "");

var appData = {
    money,
    timeData: time,
    expenses,
    optionalExpenses:{},
    income: "",
    savings: false
};

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = +prompt("Во сколько обойдется?", "");

var expenses = {};
expenses [answer1] = answer2;
appData.expenses = expenses;

console.log ("Ваш ежедневный бюджет: " + (appData.money - appData.expenses[answer1]) / 30 );

