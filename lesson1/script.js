var money,
    time;

money = prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");

var answer1 = prompt("Введите обязательную статью расходов в этом месяце");
var answer2 = prompt("Во сколько обойдется?"); 

var appData = {
    "budget": money,
    "timeData": time,
    "expenses": {[answer1] : answer2},
    "optionalExpenses": undefined,
    "income": undefined,
    "savings": false
};

alert(money/30);