let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();
//shows error as the variable x is not defined in the function scope.
//The function has a local variable named x, so it doesn't look for the outer one.