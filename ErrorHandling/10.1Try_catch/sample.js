function divide(a,b){
    if(b==0){
        throw new Error("Cannot divide by zero")
    }
    return a/b;
}

try {
    console.log(divide(16,4));

} catch (error) {
    console.log(error.message);
}
finally{
    console.log("Execution of the function is completed!");
}