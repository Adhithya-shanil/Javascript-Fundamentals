console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam("innocent rabbit") );
function checkSpam(str){
    str=str.toLowerCase();
    // console.log(str);
    if(str.includes("viagra") || str.includes("xxx")){
        return true;
    }
    return false
}