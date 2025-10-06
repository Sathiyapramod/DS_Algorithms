/**
 * @param: "Javascript is everything"
 * @return : "everything is Javascript"
 */

function without_split(input) {
  // variables -> word
  // iterate on every letter
  // if letter is not whitespace, add each letter to word
  // else, push the last word to words & re-initialize the word to ""
  let word = "";
  let words = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      word += input[i];
    } else {
      words.push(word);
      word = "";
    }
  }
  words.push(word);
  result = "";
  for (let content of words) {
    result += content + " ";
  }
  return result;
}

// console.log(without_split("Javascript"));
console.log(without_split("Javascript is everything"));
