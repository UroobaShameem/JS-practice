// 6.Create a new empty object literal and assign it to the variable favCar.
// 7.Using the dot notation, assign a color property to the favCar object and give it a string value with the color of your choice.
// 8.Using the dot notation, assign a covertible property to the favCar object and give it a boolean value of your choice.
// 9.Use the console to log the entire favCar object.

var favCar = {};
favCar.color = "red";
favCar.convertible = true;
console.log(favCar);

// adding functions to objects
favCar.start = function() {
    console.log("Starting the car");
}
favCar.stop = function() {
    console.log("Stopping the car");
}

// calling the functions
favCar.start();
favCar.stop();