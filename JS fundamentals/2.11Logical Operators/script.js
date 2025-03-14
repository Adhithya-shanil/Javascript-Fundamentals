//task1
//alert( null || 2 || undefined ); // 2

//task2
// alert( alert(1) || 2 || alert(3) );  first 1 then 2

//task3
// alert( 1 && null && 2 ); //ans: null

//task4
// alert( alert(1) && alert(2) );//ans: 1

//task5
// alert( null || 2 && 3 || 4 );//ans: 3

//task6
// let age=prompt("Enter your age")

// if(age>=14 && age<=90){
//     alert("Yes")
// }

//task7
// if (!(age >= 14 && age <= 90))
// if (age < 14 || age > 90)

//task8
// if (-1 || 0) alert( 'first' );
// if (-1 && 0) alert( 'second' );
// if (null || -1 && 1) alert( 'third' ); //first and third

//task9
let user= prompt("Who's there?");
if (user == 'Admin'){
    let password = prompt('Password?')
        if(password=='TheMaster'){
            alert("Welcome!");
        }
        else if(password==''){
            alert("Canceled");
        }
        else{
            alert("Wrong password");
        }
    }
else if(user==''){
    alert("Canceled");
}
else{
    alert("I don't know you");
}