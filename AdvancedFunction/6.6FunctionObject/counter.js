function makeCounter() {
    let count = 0; 
    function counter() {
      return count++;
    }
  
    counter.set = (value) => {
      count = value;
    };
  
    counter.decrease = () => {
      count--;
    };
  
    counter.get = () => count;
  
    return counter; 
  }
  
  
  let counter = makeCounter();
  
  console.log(counter()); 
  console.log(counter()); 
  console.log(counter()); 
  
  counter.set(10); 
  console.log(counter()); 
  console.log(counter()); 
  
  counter.decrease(); 
  console.log(counter()); 
  
  console.log(counter.get()); 
  