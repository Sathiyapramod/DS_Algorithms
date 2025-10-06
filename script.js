class Trie {
  constructor(cities) {
    this.trie = {};
    //   call the addwords method whenever the instance is created
    this.addWordsToTrie(cities);
  }

  /**
   * @param = string[]
   */
  addWordsToTrie(cities) {
    for (let city of cities) {
      let obj = this.trie;
      city = city.toLowerCase();
      for (const letter of city) {
        if (!obj.hasOwnProperty(letter)) {
          // create a new entry
          obj[letter] = {};
        }
        // by default , go to the next letter
        // go to the next letter
        obj = obj[letter];
      }
      obj["end"] = true;
    }
  }
  print() {
    return JSON.stringify(this.trie);
  }

  getWordsFromTrie(word, count = 2) {
    word = word.toLowerCase();
    let obj = this.trie;
  }

  getWordsByDFS() {}
}

myTrie = new Trie(["chennai", "coimbatore", "cochin"]);
console.log(myTrie.print());
