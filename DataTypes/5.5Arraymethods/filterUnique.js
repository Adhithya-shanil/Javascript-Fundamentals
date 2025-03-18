function unique(arr) {
    word=[];
    for(let i of arr){
        if(!word.includes(i)){
            word.push(i)
        }
    }
    return word;
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  

console.log(unique(strings));