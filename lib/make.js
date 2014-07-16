var Make = function(name, establishedDate, address) {
  this.name = name;
  this.establishedDate = establishedDate;
  this.address = address;
};

Make.prototype = {
  display: function() {
    return this.name + " from " + this.address.city + " was established on " + this.establishedDate;
  }
};
