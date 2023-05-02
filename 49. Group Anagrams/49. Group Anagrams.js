/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let output = [];
    let map = new Map();
    for (let index = 0; index < strs.length; index ++ ){
        let sortedWord = strs[index].split('').sort().join('')
        if(map.has(sortedWord)){
            map.get(sortedWord).push(strs[index]);
        }
        else{
            map.set(sortedWord, [strs[index]]);
        }
        
    }
    
       map.forEach( value => {
           output.push(value);
       })

    
    return output;
};
