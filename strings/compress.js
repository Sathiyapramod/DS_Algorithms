/*
Test Cases
None -> None
'' -> ''
'AABBCC' -> 'AABBCC'
'AAABCCDDDD' -> 'A3BC2D4'
*/

function compress(str) {
    if (str === "") return "";
    let count = 0;
    let comp = "";
    let last_char = str[0];

    for (let char of str) {
        // iterate through each char in the string
        if (char === last_char) {
            count++;
        } else {
            comp += last_char + (count > 1 ? count.toString() : "");
            last_char = char;
            count = 1;
        }
    }
    return comp.length < str.length ? comp : str;
}

console.log(compress("aabcccccaaa"));
