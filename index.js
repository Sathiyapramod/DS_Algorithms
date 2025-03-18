/**
 * 1. Inheritance
 * 2. Abstraction
 * 3. Polymorphism
 * 4. Encapsulation
 */

class Data {
  /**
   * imaginary instance
   */
  constructor() {
    this.name = "";
    this.rollNo = 0;
  }
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
}

const myData = new Data(); // Encapsulation

myData.setName("foo");
console.log(myData.getName());
