

function makeWorker() {
    let name = "Pete";
  
    return function() {
    //   alert(name);
      console.log(name);
    };
  }
  
  let name = "John";
  
  // create a function
  let work = makeWorker();
  
  // call it
  work(); // what will it show?

  //It will show Pete as If a variable exists inside the function’s scope, it uses that first.