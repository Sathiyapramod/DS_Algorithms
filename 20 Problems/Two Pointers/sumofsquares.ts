function judgeSquareSum(c: number): boolean {
    // case 1
    // a = 2;
    // b = 3;
    // c = 5
    // checkPoint 1*1 + 2*2 = 5; // ok
    // true

    // case 2
    // a=2;
    // b=1
    // checkPoint 2*2 +1*1 = 3
    // false;

    for (let a = 0; a * a < c; a++) {
        let b: number = Math.sqrt(c - a * a);
        if (b === Math.round(b)) return true;
    }
    return false;
}

console.log(judgeSquareSum(5));
console.log(judgeSquareSum(3));
