class Person {
  constructor(firstname, lastname) {
    this.firstname = firstname || 'default';
    this.lastname = lastname || 'default';
  }

  greet() {
    return 'Hi ' + firstname;
  }
}

var john = new Person('John', 'Doe');

class InformalPerson extends Person {
  constructor(firstname, lastname) {
    super(firstname, lastname);
  }

  greet() {
    return 'Yo ' + firstname;
  }
}

console.log(john);