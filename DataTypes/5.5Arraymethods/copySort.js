let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);
console.log(sorted);
console.log(arr)

function copySorted(arr){
    let arr1=[...arr];
    arr1.sort();
    return arr1; //return arr.slice().sort();
}

// we can use a slide method without any parameter to create a copy of the array, if we just use another variable to store the
// copy of the array, it will not change the original array as only the reference is passeed to the new variable,
//we can also use the spread operator ...arr to store the copy of the array into the another variable