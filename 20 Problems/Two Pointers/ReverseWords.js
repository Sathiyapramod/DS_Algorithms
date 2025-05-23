// test cases
/*
Input: s = "the sky is blue"
Output: "blue is sky the"
*/
/*
Input: s = "  hello world  "
Output: "world hello"
*/
/*
Input: s = "a good   example"
Output: "example good a"
*/
function reverseWords(s) {
    var str = s
        .replace(/^\s+|\s+$|\s+(?=\s)/g, "")
        .trim()
        .split(" ");
    var len = str.length;
    var result = [];
    var i = 0;
    while (i < str.length) {
        result[len - i - 1] = str[i];
        i++;
    }
    return result.join(" ");
}
console.log(reverseWords("the sky is blue"));
console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));

