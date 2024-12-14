// input = [10,20,30,40,50]
// output = 10

function smallest(arr) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    let small = Infinity;
    //     for (let i = 0; i < arr.length; i++) {
    //         if (large < arr[i]) large = arr[i];
    //     }
    //     return large;
    let i = 0;
    while (arr[i] < small) {
        if (small > arr[i]) small = arr[i];
        i++;
    }
    return small;
}

console.log(smallest([10, 20, 30, 40, 50]));
console.log(smallest([10, -10, 30, 40, 40]));
