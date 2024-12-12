/*
Test Cases
None -> None
[''] -> ['']
['f', 'o', 'o', ' ', 'b', 'a', 'r'] -> ['r', 'a', 'b', ' ', 'o', 'o', 'f']
*/

function reverse(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        let temp = str[left];
        str[left++] = str[right];
        str[right--] = temp;
    }
    return str;
}

// console.log(reverse(["f", "o", "o", " ", "b", "a", "r"]));
console.log(reverse(["h", "e", "l", "l", "o"]));
console.log(reverse(["H", "a", "n", "n", "a", "h"]));
