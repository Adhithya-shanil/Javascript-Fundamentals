function shuffle(array) {
    array.sort(() => Math.random() - 0.5);//in sort() method it compares 2 numbers and if its -ve a comes before b and if +ve a comes after b and if 0 right order, 
    // so we here make a random number between -0.5 and +0.5 to randomly shuffle the numbers using the sort function
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  console.log(arr);