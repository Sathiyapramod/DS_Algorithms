function isValid(x1, v1, x2, v2) {
    if (v1 === v2) {
        if (x1 == x2) {
            return "YES";
        } else return "NO";
    } else {
        let n = (x2 - x1) / (v1 - v2);
        if ((x2 - x1) % (v1 - v2) === 0 && n >= 0) return "YES";
        else return "NO";
    }
}

console.log(isValid(2, 1, 1, 2));
console.log(isValid(0, 3, 4, 2));
console.log(isValid(0, 2, 5, 3));
