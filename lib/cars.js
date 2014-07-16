// Create a couple of cars in lib/cars.js

// Properties are model, year, price and make (use one of the makes created above for this property).
// Methods are display. This returns a string.
var civic = {
  model: "Civic",
  year: 1998,
  price: 8000,
  make: honda,
  display: function() {
    return this.year + " " + this.make.name + " " + this.model + " costs $" + this.price;
  }
};

var gti = {
  model: "GTI",
  year: 2003,
  price: 5000,
  make: vw,
  display: function() {
    return this.year + " " + this.make.name + " " + this.model + " costs $" + this.price;
  }
};
