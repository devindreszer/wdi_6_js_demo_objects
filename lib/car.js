var Car = function(model, year, price, make) {
  this.model = model;
  this.year = year;
  this.price = price;
  this.make = make;
};

Car.prototype = {
  display: function(){
    return this.year + " " + this.make.name + " " + this.model + " costs $" + this.price;
  }
};
