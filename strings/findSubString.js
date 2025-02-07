/*
sentence = "sadbutsad"
word = "sad"
*/

function checkSubString(sentence, word) {
  // traverse through each letter in the sentence
  // find substring of length word in the sentence at each index
  // if found matching with the word, return (or) store the indices
  // else return -1

  if (sentence.length === word.length) {
    if (sentence === word) return 0;
  }

  for (let i = 0; i < sentence.length - word.length + 1; i++) {
    const temp = sentence.substring(i, i + word.length);
    if (temp === word) {
      return i;
    }
  }
  return -1;
}

console.log(checkSubString("sadbutsad", "sad")); //expected : 0
console.log(checkSubString("leetcode", "leeto")); // expected: -1 (since no occuring leeto inside leetcode)
console.log(checkSubString("abc", "c")); // expected : 2
