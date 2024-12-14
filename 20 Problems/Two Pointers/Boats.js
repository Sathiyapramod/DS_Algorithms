function Boats(arr, n) {
    arr.sort((a, b) => a - b);

    let left = 0;
    let right = arr.length - 1;
    let count = 0;

    while (left <= right) {
        const sum = arr[left] + arr[right];
        if (sum <= n) {
            left++;
        }
        right--;
        count++;
    }

    return count;
}

console.log(Boats([1, 2], 3)); // output = 1
console.log(Boats([3, 2, 2, 1], 3)); // output = 3
console.log(Boats([3, 5, 3, 4], 5));
