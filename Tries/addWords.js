import cities from "./cities.js";

class Trie {
  constructor(arr) {
    this.trie = {};
    this.addWordsToTrie(arr);
  }

  addWordsToTrie(input) {
    for (let word of input) {
      let obj = this.trie;
      word = word.toLowerCase();
      for (const letter of word) {
        if (!obj.hasOwnProperty(letter)) {
          obj[letter] = {};
        }
        obj = obj[letter];
      }
      obj.end = true;
    }
  }

  print() {
    return this.trie;
  }
  getWordsFromTrie(word, count = 2) {
    word = word.toLowerCase();
    let obj = this.trie;
    for (const key of word) {
      obj = obj[key];

      if (!obj) return [];
    }
    return this.getWordsByDFS(obj, count, word);
  }

  getWordsByDFS(trie, count = Infinity, text, result = []) {
    // check if the word searched fully
    if (trie.end) {
      result.push(text);

      // if the matchList matches the count Qty
      if (result.length === count) {
        return result;
      }
    }

    for (const key of trie) {
      if (trie.hasOwnProperty(key)) {
        this.getWordsByDFS(trie[key], count, text + key, result);
        if (result.length === count) break;
      }
    }
    return result;
  }
}

const entry = new Trie(cities.map((city) => city.name));

export default Trie;

console.log(entry.print());
