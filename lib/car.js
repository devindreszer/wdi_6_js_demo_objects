var createCar = function(model, year, price, make){
  var _display = function(){
    return this.year + " " + this.make.name + " " + this.model + " costs $" + this.price;
  };

  return {
    model: model,
    year: year,
    price: price,
    make: make,
    display: _display
  };
};

var civic = createCar("Civic", 1998, 8000, honda);
var gti = createCar("GTI", 2003, 5000, vw);
