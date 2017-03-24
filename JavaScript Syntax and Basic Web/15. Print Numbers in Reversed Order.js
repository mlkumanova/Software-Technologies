function solve(arr) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        arr1[i] = arr[arr.length - 1 - i];
    }
    for (let i = 0; i < arr1.length; i++) {
        console.log(arr1[i]);
    }
}

solve(['10', '15', '20']);