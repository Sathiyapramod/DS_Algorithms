function sumOfSqr(n) {
    if (n < 0) return false;

    let left = 0;
    let right = Math.floor(Math.sqrt(n));

    while (left <= right) {
        const sum = left * left + right * right;
        if (sum === n) return true;
        else if (sum < n) left++;
        else right--;
    }
    return false;
}

console.log(sumOfSqr(5));
console.log(sumOfSqr(3));
console.log(sumOfSqr(4));
