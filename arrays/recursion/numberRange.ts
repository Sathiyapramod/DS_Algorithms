/*
numberRange(1, 5); // should return [1, 2, 3, 4, 5]
numberRange(3, 10); // should return [3, 4, 5, 6, 7, 8, 9, 10]
numberRange(7, 7); // should return [7] (only one number)
 */

function numberRange(startNum: number, endNum: number): number[] {
    if (startNum === endNum) {
        return [startNum];
    }

    const numbers = numberRange(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
}

console.log(numberRange(1, 5));
console.log(numberRange(3, 10));
console.log(numberRange(7, 7));
