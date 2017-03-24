function solve(arg) {
    let n1 = Number(arg[0]);
    let n2 = Number(arg[1]);
    let n3 = Number(arg[2]);

    let counter = 0;
   for(var i = 0; i < arg.length; i++) {
       if (arg[i] < 0){
           counter++;
       }
   }

    if (counter % 2 == 1){
        console.log("Negative");
    }
   if (counter % 2 == 0){
       console.log("Positive");
   }

}

solve(['-2', '-4', '-3'])