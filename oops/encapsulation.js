class BankAccount {
  // the hash symbol is used to declare any private fields
  #name;
  #acNo;

  constructor(acNo, name) {
    this.#name = name;
    this.#acNo = acNo;
  }
  // this is a public method which can be accessed externally
  getData() {
    return { name: this.#name, ac_no: this.#acNo };
  }
  #calcInterest() {
    return 6.7;
  }

  getInterest() {
    return this.#calcInterest();
  }
}

const entry1 = new BankAccount("5632", "John");
console.log(entry1.getData()); // expected output {name:"John", ac_no:"5632"}
// console.log(entry1.#calcInterest());
// this will throw an error since it is a private method
console.log(entry1.getInterest()); // expected output : 6.7
