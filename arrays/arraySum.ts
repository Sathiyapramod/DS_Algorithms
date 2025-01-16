function arraySum(list: number[]): number {
    if (list.length === 0) return 0;
    // use recursion
    return list[0] + arraySum(list.slice(1));
}

console.log(arraySum([1, 2, 3, 4, 5]));
console.log(arraySum([-1, -2, -3, -4, -5]));
console.log(arraySum([]));
