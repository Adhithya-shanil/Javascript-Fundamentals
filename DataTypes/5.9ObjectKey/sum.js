let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function sumSalaries(obj){
    sum=0;
    for(let i of Object.values(obj)){
        sum+=i;
    }
    return sum;
}
console.log(sumSalaries(salaries));