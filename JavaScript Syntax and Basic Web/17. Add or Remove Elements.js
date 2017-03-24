function solve(args) {
    let newArr = [];
    for (let i = 0; i < args.length; i++) {
        let temp = args[i].split(' ');
         index = temp[0];
         value = temp[1];

        if (index == "add") {
            newArr.push(value);
        }

        if (index == "remove") {

            newArr.splice(value, 1);
        }
    }
    for (var j = 0; j < newArr.length; j++) {
        console.log(newArr[j]);
    }

}
solve([
    'add 3',
    'add 5',
    'add 7']);
