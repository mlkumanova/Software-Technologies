function solve(args) {

    for (let i = 0; i <= args.length; i++){
        if (args[i] === "Stop" ){
            break;
        }
        console.log(args[i]);
    }
}

solve(['3', '6', '5', '4', 'Stop', '10', '12']);