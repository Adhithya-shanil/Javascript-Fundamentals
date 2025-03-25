function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
  }
  
  let counter = new Counter();
  
//   alert( counter.up() ); // ?
//   alert( counter.up() ); // ?
//   alert( counter.down() ); // ?

console.log(counter.up());
console.log(counter.up());
console.log(counter.down());

//Both nested functions are created within the same outer Lexical Environment, so they share access to the same count variable:
//therefore it works with the vakue of 1,2,1