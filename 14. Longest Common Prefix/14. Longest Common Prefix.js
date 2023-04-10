/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 || strs.includes("")) {
        return "";
    }
    for (let index = 0; index < strs[0].length; index++){
        if(strs.length === 1) {return strs[0]}
        for (let string = 1; string < strs.length; string++){
            if (index === strs[string].length || strs[0][index] !== strs[string][index]) {
                return strs[0].substring(0, index);
            }
        }
    }  
    return strs[0];
};
