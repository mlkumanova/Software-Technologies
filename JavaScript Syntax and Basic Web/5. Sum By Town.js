/*function solve(args) {
    let result = {};

    for (let i = 0; i < args.length; i++) {
        let townIncome = args[i];
        let name = townIncome.town;
        let income = townIncome.income;

        if (result[name] || result[name] === 0) {
            result[name] += income;
        } else {
            result[name] = income;
        }
    }
    let towns = Object.keys(result).sort();

    for (let i = 0; i < towns.length; i++) {
        console.log(`${towns[i]} -> ${result[towns[i]]}`);

    }

}*/
function calcSumsByTown(arr) {
    let objects = arr.map(JSON.parse);
    let sums = {};
    for (let obj of objects)
        if (obj.town in sums)
            sums[obj.town] += obj.income;
        else
            sums[obj.town] = obj.income;
    let towns = Object.keys(sums).sort();
    for (let town of towns)
        console.log(`${town} -> ${sums[town]}`);
}

/* input
calcSumsByTown([{"town": "Sofia", "income": 200},
    {"town": "Varna", "income": 120},
    {"town": "Pleven", "income": 60},
    {"town": "Varna", "income": 70}]);
*/
