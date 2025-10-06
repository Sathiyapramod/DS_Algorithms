class Area {
  getArea() {
    return;
  }
}

class Square extends Area {
  constructor(len, bdt) {
    super(); // this super keyword calls the constructor of the base class
    this.len = len;
    this.bdt = bdt;
  }

  getArea() {
    return this.len * this.bdt;
  }
}

const newEntry = new Square(20, 30);
console.log(newEntry.getArea());
