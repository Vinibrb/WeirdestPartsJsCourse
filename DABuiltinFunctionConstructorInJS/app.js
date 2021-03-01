var a = 3;
var b = new Number(3)

// Double equals coerce the values to the same type and
// returns true

console.log(a == b)

// Doesnt coerce, returns false
console.log(a === b)

var c = Number("3")
console.log(c)