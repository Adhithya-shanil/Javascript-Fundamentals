// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
  alert( user.ref.name ); 
  //the above code returns error as the this inside makeUser return the global object windows which is undefined
  //this can be corrected using the below code,ie.. changing ref property to a method

  function makeUser() {
    return {
      name: "John",
      ref(){
        return this;
      }
    };
  }
  
  let user = makeUser();
  
  alert( user.ref().name ); 

  