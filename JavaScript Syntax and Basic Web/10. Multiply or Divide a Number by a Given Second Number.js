function solve(args) {
  let num1 = Number(args[0]);
  let num2 = Number(args[1]);

  let result = 0;
  if (num2 >= num1){
      result = num1 * num2;
  }
  else {
      result = num1/ num2;
  }

  console.log(result);

}

solve(['10', '5']);