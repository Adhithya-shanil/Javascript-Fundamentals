function unique(str) {
    let set = new Set(str);
    console.log(set);
    return Array.from(set);
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log(unique(values));
