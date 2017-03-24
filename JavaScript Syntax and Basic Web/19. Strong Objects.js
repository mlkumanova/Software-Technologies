function solve(args) {
    let obg = {};
for (arg of args){
    let tokens = arg.split(' ');

    let name = tokens[0];
    let age = tokens[2];
    let grade = tokens[4];

    console.log("Name: " + `${name}`);
    console.log("Age: " + `${age}`);
    console.log("Grade: " + `${grade}`);
}


}

solve([
    'Pesho -> 13 -> 6.00',
    'Ivan -> 12 -> 5.57',
    'Toni -> 13 -> 4.90'
]);