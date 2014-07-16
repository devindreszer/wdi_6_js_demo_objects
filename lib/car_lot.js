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
