var createMake = function(name, establishedDate, address){
  var _display = function() {
    return this.name + " from " + this.address.city + " was established on " + this.establishedDate;
  };

  return {
    name: name,
    establishedDate: establishedDate,
    address: address,
    display: _display
  };
};

var vw = createMake("Volkswagen", 1900, sf);
var honda = createMake("Honda", 1920, oceanside);
