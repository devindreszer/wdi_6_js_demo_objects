// Create a Person Constructor function
var Person = function(name, age) {
  this.name = name;
  this.age = age;
};

// When you set a property on a constructor function prototype, like below,
// that property is available to all instances created
// Set the prototype property for the above constructor function
Person.prototype = {
  describe: function(){
    return this.name + " is " + this.age + " years old";
  }
};

// Create a new object using the Person Constructor Function
// joe will point to this new object
var joe = new Person('joe', 23);
var jill = new Person('jill', 32);

// Lookup name property
// joe has the name property, DONE.
console.log(joe.name);

// Lookup the describe property
// joe, do you have the describe property?
// Nope, I dont
// joe do you have a __proto__ property?
// Yes, I do
// Does the __proto__ point to an object that has a describe property
// Yes, b/c __proto__ when created with a Constructor function makes the
// the __proto__ property point to the constructor function prototype property
// which is set above (Person.prototype)
console.log(joe.describe());
console.log(jill.describe());
