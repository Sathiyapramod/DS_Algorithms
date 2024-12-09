/*
Implement the Factory Method design pattern.

The Factory Method is a creational design pattern that provides an interface for creating objects in a superclass
but allows subclasses to alter the type of objects that will be created.

You are given code that includes a few vehicles types and their respective factories. Complete the factory method implementation such that each factory returns the correct vehicle.
*/

class Vehicle {
    getType() {
        throw new Error("getType method must be overridden");
    }
}

class Car extends Vehicle {
    getType() {
        return "Car";
    }
}

class Bike extends Vehicle {
    getType() {
        return "Bike";
    }
}

class Truck extends Vehicle {
    getType() {
        return "Truck";
    }
}

class VehicleFactory {
    createVehicle() {
        throw new Error("createVehicle method must be overridden");
    }
}

class CarFactory extends VehicleFactory {
    // here the method createVehicle() is over-ridden after extending to the CarFactory class
    // Write your code here
    createVehicle() {
        return new Car();
    }
}

class BikeFactory extends VehicleFactory {
    // here the method createVehicle() is over-ridden after extending to the BikeFactory class
    // Write your code here
    createVehicle() {
        return new Bike();
    }
}

class TruckFactory extends VehicleFactory {
    // here the method createVehicle() is over-ridden after extending to the TruckFactory class
    // Write your code here
    createVehicle() {
        return new Truck();
    }
}

const myCar = new CarFactory().createVehicle();
const myBike = new BikeFactory().createVehicle();
const myTruck = new TruckFactory().createVehicle();

console.log(myCar.getType()); // "Car"
console.log(myBike.getType()); // "Bike"
console.log(myTruck.getType()); // "Truck"
