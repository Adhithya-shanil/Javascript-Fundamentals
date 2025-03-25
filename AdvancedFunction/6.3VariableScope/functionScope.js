let name = "John";

function sayHi() {
//   alert("Hi, " + name);
  console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

//The function will call Pete coz the function knows it need 
// to use the varible name, but it stores only the reference and when it is setup its is called only last
//waiting for the latest value of the variable name. So it will show Pete.