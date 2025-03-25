let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // Output: alerts the entire array