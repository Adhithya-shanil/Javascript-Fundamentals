let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() ); 

//Both the functions A and B returns reference to the same object thus returning true in ===