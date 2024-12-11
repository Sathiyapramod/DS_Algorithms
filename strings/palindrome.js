// input "amma" output = true
// input "1" output = true
// input "foo" output = false

function isValid(str) {
    if (!str) return false;

    if (str.length < 2) return true;
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

    let len = str.length;
    for (let i = 0; i < len / 2; i++) {
        if (str[i] !== str[len - i - 1]) return false;
    }
    return true;
}

console.log(isValid("malayalam"));
console.log(isValid("racecar"));
console.log(isValid("A man, a plan, a canal, Panama!"));

console.log(isValid("1"));
console.log(isValid("foo"));
