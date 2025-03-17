// truncate("What I'd like to tell on this topic is:", 20) == "What I'd like to te…"

// truncate("Hi everyone!", 20) == "Hi everyone!"

console.log(truncate("What I'd like to tell on this topic is:", 20) );
console.log( truncate("Hi everyone!", 20));
function truncate(str,n){
    if(str.at(n-1)){
        return str.slice(0,n-1)+"..."
    }
    return str;
}

// function truncate(str, maxlength) {
//     return (str.length > maxlength) ?
//       str.slice(0, maxlength - 1) + '…' : str;
//   }