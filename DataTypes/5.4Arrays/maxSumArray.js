function getMaxSubSum(arr){
    let maxsum=0;
    let subsum=0;
    for(let i of arr){
        subsum+=i;
        maxsum=Math.max(maxsum,subsum);
        if(subsum<0){
            subsum=0;
        }

    }

    return maxsum;
}



console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]) );
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));
console.log(getMaxSubSum([-1, -2, -3]));

