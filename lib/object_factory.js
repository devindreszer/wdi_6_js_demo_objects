// Person factory
var createPerson = function(name, age) {

  // Private method
  var _display = function() {
    return this.name + " is " + this.age + " years old";
  };

  return {
    name: name,
    age: age,
    describe: _display
  };
};

var joe = createPerson("joe", 23);
var jill = createPerson("jill", 32);

console.log(joe.describe());
console.log(jill.describe());
