// alert( extractCurrencyValue('$120') === 120 );

console.log(extractCurrencyValue('$120'));
// console.log(typeof(extractCurrencyValue('$120')));
function extractCurrencyValue(str){
    return +str.slice(1)
}