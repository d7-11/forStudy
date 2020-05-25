let money = +prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    "budget": money,
    "timeData": time,
    "expenses": {},
    "optionalExpenses": {},
    "income": [],
    "savings": false
};

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


appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Min level");
} else if (appData.moneyPerDay > 100 && appData.money < 2000) {
    console.log("Medium level");
} else if (appData.money < 2000) {
    console.log("Hight level");
} else {
    console.log("Smth went wrong");
}

console.log(appData);