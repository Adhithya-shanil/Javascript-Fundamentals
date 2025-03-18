let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

function getAverageAge(arr){
    let sum=0;
    arr.map(user=>sum+=user.age);
    return sum/arr.length;
}

console.log(getAverageAge(arr));

//We can also use the reduce array method to optain the value from the array
// function getAverageAge(users) {
//     return users.reduce((prev, user) => prev + user.age, 0) / users.length;
//   }