var createAddress = function(street, city, state, country) {
  var _display = function() {
    return this.street + ", " + this.city + ", " + this.state + ", " + this.country;
  };

  return {
    street: street,
    city: city,
    state: state,
    country: country,
    display: _display
  };
};

var sf = createAddress("1666 Page St", "San Francisco", "CA", "USA");
var oceanside = createAddress("301 Mission Ave", "Oceanside", "CA", "USA");
