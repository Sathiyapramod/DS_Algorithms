// input "amma" output = true
// input "1" output = true
// input "foo" output = false

function isValid(str) {
    if (!str) return false;

    if (str.length < 2) return true;
    str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    console.log(str);
    // let len = str.length;
    // for (let i = 0; i < len / 2; i++) {
    //     if (str[i] !== str[len - i - 1]) return false;
    // }
    // return true;
    let len = str.length;
    let left = 0;
    let right = len / 2 + 1;
    while (left < right) {
        if (str[left] !== str[len - left - 1]) return false;
        else {
            left++;
            right--;
        }
    }
    return true;
}

console.log(isValid("malayalam"));
console.log(isValid("race a car"));
console.log(isValid("A man, a plan, a canal, Panama!"));

console.log(isValid("1"));
console.log(isValid("foo"));
