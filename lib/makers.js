// Create a couple of car makers in lib/makers.js

// Properties are name, established date and address (use one of the addresses created above for this property).
// Methods are display. This returns a string.
var vw = {
  name: "Volkswagen",
  establishedDate: new Date(1900,1,1),
  address: sf,
  display: function() {
    return this.name + " from " + this.address.city + " was established on " + this.establishedDate;
  }
};

var honda = {
  name: "Honda",
  establishedDate: new Date(1920,1,1),
  address: oceanside,
  display: function() {
    return this.name + " from " + this.address.city + " was established on " + this.establishedDate;
  }
};
