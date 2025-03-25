function makeArmy() {

    let shooters = [];
  
    for(let i = 0; i < 10; i++) {  //using let instead of var
      let shooter = function() { 
        console.log(i);
      };
      shooters.push(shooter);
    }
  
    return shooters;
  }
  
  let army = makeArmy();
  
  army[0]();
  army[1](); 
  army[2]();