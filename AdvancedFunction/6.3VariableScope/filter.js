/* .. your code for inBetween and inArray */
let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

console.log(arr.filter(inBetween(3, 6)) );
console.log(arr.filter(inArray([1, 2, 10])));

function inBetween(a,b){
    return function(x){
        return x >= a && x <= b;
    }
}

function inArray(arr){
    return function(x){
        return arr.indexOf(x) !== -1;
    }
}