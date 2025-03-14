function readNumber() {
    let a; 
  
    do {
      a = prompt("Enter a number");
    } while (a !== null && a !== '' && !isFinite(a));
  
    if (a === null || a === '') return null; 
    return +a; 
  
  let number = readNumber(); 
  alert(`Read: ${number}`); 
}