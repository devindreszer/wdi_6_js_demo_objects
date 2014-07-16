var Address = function(street, city, state, country) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.country = country;
};

Address.prototype = {
  display: function() {
    return this.street + ", " + this.city + ", " + this.state + ", " + this.country;
  }
};
