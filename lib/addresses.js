var address1 = {
  street: "1666 Page St",
  city: "San Francisco",
  state: "CA",
  country: "USA",
  display: function(){
    return this.street + ", " + this.city + ", " + this.state + ", " + this.country;
  }
};

var address2 = {
  street: "301 Mission Ave",
  city: "Oceanside",
  state: "CA",
  country: "USA",
  display: function(){
    return this.street + ", " + this.city + ", " + this.state + ", " + this.country;
  }
};