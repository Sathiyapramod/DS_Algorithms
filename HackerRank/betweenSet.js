function getTotalX(A, B) {
    function gcd(a, b) {
        while (b !== 0) {
            [a, b] = [b, a % b];
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    function lcmOfArray(arr) {
        return arr.reduce((acc, val) => lcm(acc, val), 1);
    }

    function gcdOfArray(arr) {
        return arr.reduce((acc, val) => gcd(acc, val));
    }

    // Step 1: Calculate LCM of the first array A
    const lcmA = lcmOfArray(A);

    // Step 2: Calculate GCD of the second array B
    const gcdB = gcdOfArray(B);

    // Step 3: Count multiples of lcmA that are factors of gcdB
    let count = 0;
    let multiple = lcmA;

    while (multiple <= gcdB) {
        if (gcdB % multiple === 0) {
            count++;
        }
        multiple += lcmA;
    }

    return count;
}

console.log(getTotalX([2, 4], [16, 32, 48]));
