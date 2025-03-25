let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(str){
    let map = new Map();
    for(let i of str){
        let word = i.toLowerCase().split('').sort().join('');
        // console.log(word);
        map.set(word,i)
    }
    return Array.from(map.values())

}


console.log(aclean(arr));