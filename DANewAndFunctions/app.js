function Person (firstname, lastname) {
  console.log(this);
  this.firstname = firstname;
  this.lastname = lastname;
  console.log('This function is invoked.');
}

var john = Person('John', 'Doe');

console.log(john);

var jane = Person('Jane', 'Doe');
console.log(jane);

Person.prototype.getFormalFullName = function() {
  return this.lastname + ', ' + this.firstname;
}

console.log(john.getFormalFullName());