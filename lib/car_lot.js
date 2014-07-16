// Create One car lot in lib/car_lot.js

// Properties are name and an array of cars.
// Methods are:
// addCar(car). This will add a car to the lot.
// display. This returns a string.
// totalValue. This return the total value of all the cars in the lot.
var car_lot = {
  name: "Honest Grant's",
  cars: [],
  addCar: function(car){
    this.cars.push(car);
  },
  display: function(){
    return this.name;
  },
  totalValue: function(){
    total = 0;
    this.cars.forEach(function(car){
      total += car.price;
    });
    return total;
  }
};

car_lot.addCar(civic);
car_lot.addCar(gti);

car_lot.cars.forEach(function(car){
  console.log(car.display());
});

console.log(car_lot.totalValue());
