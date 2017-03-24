function solve(args) {

    let obj = {};

    for (let arg of args.slice(0, args.length - 1)) {
        let tokens = arg.split(' ');

        let key = tokens[0];
        let value = tokens[1];

        if (obj[key]) {
            obj[key].push(value);
        } else {
            obj[key] = [value];

        }
    }
    let key = args[args.length - 1];

    console.log(obj[key] ? obj[key].join('\n') : "None");

}

solve([
    `key value`,
    `key eulav`,
    `test tset`,
    `key`
]);