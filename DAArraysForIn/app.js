Array.prototype.myCustomFeature = 'cool!';

var arr = ['John', 'Jane', 'Jim'];

for (var prop in arr) {
  console.log(prop + ': ' + arr[prop]);
}

// Array for .. in gets extra propeties if you change the Array object Prototype
// use for default loop

for (var i = 0; i < arr.length; i++) {
  // do stuff
}