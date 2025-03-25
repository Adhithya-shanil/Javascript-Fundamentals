
//     Using setInterval.
//     Using nested setTimeout

function printNumbers( a, b ){                              //using setInterval
    let count = a;`                                             `
    let counter = setInterval(()=>{console.log(count++);
        if(count==b+1) clearInterval(counter);
    },1000)

}
printNumbers(1,10);

// function printNumbers2(a, b) {                           //using nested setTimeout
//     let count = a;

//     function print() {
//         if (count > b) return; // Stop when count exceeds b

//         console.log(count++);
//         setTimeout(print, 1000); // Schedule next execution after 1 second
//     }

//     print(); // Start execution
// }


// printNumbers2(1,10)