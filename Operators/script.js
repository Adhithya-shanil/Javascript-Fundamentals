task1
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1

task2
// let a = 2;

// let x = 1 + (a *= 2);
// //a=4
// //x=5


task3
// "" + 1 + 0 // 10
// "" - 1 + 0 // -10
// true + false //1
// 6 / "3" // 2
// "2" * "3"  // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 // $45
// "4" - 2 //2
// "4px" - 2 //NaN
// "  -9  " + 5 // -95
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2

let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);
alert(+a + +b); // 12