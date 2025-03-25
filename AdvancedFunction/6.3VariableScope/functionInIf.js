let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//this show error only if the strict mode is enabled, because the function sayHi is not defined in the global scope 