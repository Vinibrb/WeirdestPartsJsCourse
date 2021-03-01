var a = new Number(3)

console.log(a)

console.log(a.toFixed(2))

var b = new String("John")

console.log(String.prototype.indexOf('o'))
console.log(String.prototype.indexOf('Jo'))

console.log(b.indexOf("o"))
console.log(b);

console.log("John".length)
console.log(new String("John").length)

var c = new Date("3/1/2015")
console.log(c);

// ---------------------------------

// Add a feature to all strings

String.prototype.isLengthGraterThan = function (limit) {
  return this.length > limit;
}

console.log("John".isLengthGraterThan(3));

Number.prototype.isPositive = function() {
  return this > 0;
}

// console.log(3.isPositive())
// Doesnt work because javascript wont automatically convert a 
// number to a Number object.

var d = new Number(3)
console.log(d.isPositive())