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

var sf = new Address("1666 Page St", "San Francisco", "CA", "USA");
var oceanside = new Address("301 Mission Ave", "Oceanside", "CA", "USA");

var vw = new Make("Volkswagen", 1900, sf);
var honda = new Make("Honda", 1920, oceanside);

var civic = new Car("Civic", 1998, 8000, honda);
var gti = new Car("GTI", 2003, 5000, vw);

car_lot.addCar(civic);
car_lot.addCar(gti);

car_lot.cars.forEach(function(car){
  console.log(car.display());
});

console.log(car_lot.totalValue());
