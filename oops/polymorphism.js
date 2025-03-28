class Drive {
  #vehicleType;

  constructor(vehicleType) {
    this.#vehicleType = vehicleType;
  }

  makeDrive() {
    return `Driving a ${this.#vehicleType}`; // this is the default behaviour of the method
  }
}

class Bike extends Drive {
  constructor(bikeName) {
    super(bikeName);
  }
}

class Car extends Drive {
  constructor(carName) {
    super(carName);
  }
}

const testDrive = new Bike("Bike");
console.log(testDrive.makeDrive());
