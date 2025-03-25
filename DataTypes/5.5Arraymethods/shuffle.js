function shuffle(array) {
    array.sort(() => Math.random() - 0.5);//in sort() method it compares 2 numbers and if its -ve a comes before b and if +ve a comes after b and if 0 right order, 
    // so we here make a random number between -0.5 and +0.5 to randomly shuffle the numbers using the sort function
  }
  
  let arr = [1, 2, 3];
  shuffle(arr);
  console.log(arr);

//:::Fisher yates shuffle :::
//   function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//       let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
  
//       // swap elements array[i] and array[j]
//       // we use "destructuring assignment" syntax to achieve that
//       // you'll find more details about that syntax in later chapters
//       // same can be written as:
//       // let t = array[i]; array[i] = array[j]; array[j] = t
//       [array[i], array[j]] = [array[j], array[i]];
//     }
//   }