let money, time;

function start () {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        console.log(i);
        let a = prompt("Введите обязательную статью расходов в этом месяце");
            b = prompt("Во сколько обойдется?"); 
        if ( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) === "string") && (typeof(b) != null)
            && a != "" && b != "" && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;       
        } else if (appData.expenses.length) {
            i = 0;
        } else {
            i = -1;
            appData.expenses = {};
        }
    }
}
chooseExpenses();

// let i = 0;
// while (i < 2) {
//     console.log(i);
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//         b = prompt("Во сколько обойдется?"); 
//     if ( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) === "string") && (typeof(b) != null)
//         && a != "" && b != "" && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;       
//     } else if (appData.expenses.length) {
//         i = 0;
//     } else {
//         i = -1;
//         appData.expenses = {};
//     }
//     i++;
// }

// let i = 0;
// do {
//     console.log(i);
//     debugger;
//     let a = prompt("Введите обязательную статью расходов в этом месяце");
//         b = prompt("Во сколько обойдется?"); 
//     if ( (typeof(a) === "string") && (typeof(a) != null) && (typeof(b) === "string") && (typeof(b) != null)
//         && a != "" && b != "" && a.length < 50 ) {
//         console.log("done");
//         appData.expenses[a] = b;       
//     } else if (appData.expenses.length) {
//         i = 0;
//     } else {
//         i = -1;
//         appData.expenses = {};
//     }
//     i++;
// } while (i < 2);



function detectDayBudget(){
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет:" + appData.moneyPerDay);
}
detectDayBudget();

function detectLevel(){
    if (appData.moneyPerDay < 100) {
        console.log("Min level");
    } else if (appData.moneyPerDay > 100 && appData.money < 2000) {
        console.log("Medium level");
    } else if (appData.money < 2000) {
        console.log("Hight level");
    } else {
        console.log("Smth went wrong");
    }
}
detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("What is the sum of savings?"),
            percent = +prompt("What the percent is?");
        
            appData.monthIncome = save/100/12*percent;
            alert("income from your deposit is: " + appData.monthIncome);
    }
}
checkSavings();

function chooseOptExpenses() {
    for (let i = 1; i <= 3; i++) {
        appData.optionalExpenses[i] = prompt("Статья необязательных расходов?");
    }
}
chooseOptExpenses();