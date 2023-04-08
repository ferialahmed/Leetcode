/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let subIndex = 0;
    if(s.length == 0 && t.length === 0) return true;
    for(let element of t){
        if(s[subIndex] === element) subIndex++;
        if(subIndex === s.length) return true;
    }
    return false;
    
};
