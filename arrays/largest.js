// input = [10,20,30,40,50]

function largest(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    let large = -Infinity;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (large < arr[i]) large = arr[i];
    //     }
    //     return large;
    let i = 0;
    while (large < arr[i]) {
        if (large < arr[i]) large = arr[i];
        i++;
    }
    return large;
}

console.log(largest([10, 20, 30, 40, 50]));
console.log(largest([10, 20, 30, 40, 40]));
