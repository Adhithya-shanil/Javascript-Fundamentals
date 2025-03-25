let map = new Map();

map.set("name", "John");

let keys = map.keys();//let keys = Array.from(map.keys()); // Convert to array,  then we can access the array methods like push, pop etc...

// Error: keys.push is not a function
keys.push("more");

//map.keys() returns an iterator, not an array.
//