let user = {
    name: "John Smith",
    age: 35
  };

let json = JSON.stringify(user);
console.log(json);

let user2=JSON.parse(json);
console.log(user2);