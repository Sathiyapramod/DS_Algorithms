class Drive {
  #vehicleType;

  constructor(vehicleType) {
    this.#vehicleType = vehicleType;
  }

  makeDrive() {
    return `🛻 Driving a ${this.#vehicleType}`; // this is the default behaviour of the method
  }
}

class Bike extends Drive {
  constructor(bikeName) {
    super(bikeName);
    this.bikeName = bikeName;
  }
  makeDrive() {
    // this will perform a method over loading while inheriting the class
    return `🚲 Riding a ${this.bikeName}`;
  }
}

// first instance - calling a Bike Class
const testDrive = new Bike("Ducati");
console.log(testDrive.makeDrive());
// Output: Riding a Ducati

const customDrive = new Drive("Ducati");
console.log(customDrive.makeDrive());
// here the method got over-rided
// Output: Driving a Ducati
