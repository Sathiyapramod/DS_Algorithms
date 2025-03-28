class Drive {
  makeDrive() {
    return "Driving any Vehicle"; // this is the default behaviour of the method
  }
}

class Bike extends Drive {
  // here the Bike class is derived from its parent class Drive
  makeDrive() {
    return "Riding a Bike";
  }
}

class Car extends Drive {
  // here the Car class is derived from its parent class Drive
  makeDrive() {
    return "Driving a Car";
  }
}

const standardDrive = new Drive();
const myCar = new Car();
const myFriendBike = new Bike();

// calling their methods
console.log(standardDrive.makeDrive());
console.log(myCar.makeDrive());
console.log(myFriendBike.makeDrive());

/*
Expected output:

Driving any Vehicle
Driving a Car
Riding a Bike
*/
